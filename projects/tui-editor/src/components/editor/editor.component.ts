import {AsyncPipe, DOCUMENT, NgIf} from '@angular/common';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ElementRef,
    EventEmitter,
    Inject,
    Input,
    OnDestroy,
    Optional,
    Output,
    Self,
    ViewChild,
} from '@angular/core';
import {NgControl} from '@angular/forms';
import {
    AbstractTuiControl,
    AbstractTuiValueTransformer,
    ALWAYS_FALSE_HANDLER,
    TuiActiveZoneDirective,
    tuiAsFocusableItemAccessor,
    tuiAutoFocusOptionsProvider,
    TuiBooleanHandler,
    TuiFocusableElementAccessor,
    TuiStringHandler,
} from '@taiga-ui/cdk';
import {
    TUI_ANIMATIONS_DEFAULT_DURATION,
    TuiDropdownDirective,
    TuiDropdownOptionsDirective,
    TuiDropdownSelectionDirective,
    TuiScrollbarModule,
    TuiWrapperModule,
} from '@taiga-ui/core';
import {Editor} from '@tiptap/core';
import {delay, Observable, takeUntil} from 'rxjs';

import {AbstractTuiEditor} from '../../abstract/editor-adapter.abstract';
import {defaultEditorTools} from '../../constants/default-editor-tools';
import {TuiTiptapEditorDirective} from '../../directives/tiptap-editor/tiptap-editor.directive';
import {TuiTiptapEditorService} from '../../directives/tiptap-editor/tiptap-editor.service';
import {TuiEditorTool} from '../../enums/editor-tool';
import {TuiEditorAttachedFile} from '../../interfaces/attached';
import {TUI_EDITOR_OPTIONS, TuiEditorOptions} from '../../tokens/editor-options';
import {TUI_EDITOR_CONTENT_PROCESSOR} from '../../tokens/editor-processor';
import {TUI_EDITOR_VALUE_TRANSFORMER} from '../../tokens/editor-value-transformer';
import {TIPTAP_EDITOR} from '../../tokens/tiptap-editor';
import {tuiIsSafeLinkRange} from '../../utils/safe-link-range';
import {TuiEditLinkComponent} from '../edit-link/edit-link.component';
import {TuiEditorSocketComponent} from '../editor-socket/editor-socket.component';
import {TuiToolbarComponent} from '../toolbar/toolbar.component';
import {TUI_EDITOR_PROVIDERS} from './editor.providers';
import {TuiEditorPortalDirective} from './portal/editor-portal.directive';
import {TuiEditorPortalHostComponent} from './portal/editor-portal-host.component';

@Component({
    standalone: true,
    selector: 'tui-editor',
    imports: [
        AsyncPipe,
        NgIf,
        TuiWrapperModule,
        TuiActiveZoneDirective,
        TuiScrollbarModule,
        TuiDropdownOptionsDirective,
        TuiDropdownDirective,
        TuiEditLinkComponent,
        TuiEditorPortalHostComponent,
        TuiEditorPortalDirective,
        TuiDropdownSelectionDirective,
        TuiTiptapEditorDirective,
        TuiEditorSocketComponent,
        TuiToolbarComponent,
    ],
    templateUrl: './editor.component.html',
    styleUrls: ['./editor.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiAsFocusableItemAccessor(TuiEditorComponent),
        tuiAutoFocusOptionsProvider({delay: TUI_ANIMATIONS_DEFAULT_DURATION}),
        TUI_EDITOR_PROVIDERS,
    ],
})
export class TuiEditorComponent
    extends AbstractTuiControl<string>
    implements OnDestroy, TuiFocusableElementAccessor
{
    @ViewChild(TuiTiptapEditorDirective, {read: ElementRef})
    private readonly el?: ElementRef<HTMLElement>;

    @Input()
    exampleText = '';

    @Input()
    tools: readonly TuiEditorTool[] = defaultEditorTools;

    @Output()
    readonly fileAttached = new EventEmitter<Array<TuiEditorAttachedFile<any>>>();

    @ViewChild(TuiToolbarComponent)
    readonly toolbar?: TuiToolbarComponent;

    focused = false;

    constructor(
        @Optional()
        @Self()
        @Inject(NgControl)
        control: NgControl | null,
        @Inject(ChangeDetectorRef) cdr: ChangeDetectorRef,
        @Inject(TIPTAP_EDITOR) readonly editorLoaded$: Observable<Editor | null>,
        @Inject(TuiTiptapEditorService) readonly editorService: AbstractTuiEditor,
        @Inject(TUI_EDITOR_CONTENT_PROCESSOR)
        private readonly contentProcessor: TuiStringHandler<string>,
        @Inject(DOCUMENT)
        private readonly doc: Document,
        @Optional()
        @Inject(TUI_EDITOR_VALUE_TRANSFORMER)
        transformer: AbstractTuiValueTransformer<string> | null,
        @Inject(TUI_EDITOR_OPTIONS) private readonly options: TuiEditorOptions,
    ) {
        super(control, cdr, transformer);

        this.editorLoaded$
            .pipe(delay(0), takeUntil(this.destroy$))
            .subscribe(() => this.patchContentEditableElement());
    }

    get nativeFocusableElement(): HTMLDivElement | null {
        return this.computedDisabled
            ? null
            : this.el?.nativeElement?.querySelector('[contenteditable].ProseMirror') ||
                  null;
    }

    get dropdownSelectionHandler(): TuiBooleanHandler<Range> {
        return this.focused ? this.isSelectionLink : ALWAYS_FALSE_HANDLER;
    }

    get editor(): AbstractTuiEditor | null {
        return this.editorService.getOriginTiptapEditor() ? this.editorService : null;
    }

    get placeholderRaised(): boolean {
        return (this.computedFocused && !this.readOnly) || this.hasValue;
    }

    get hasExampleText(): boolean {
        return (
            !!this.exampleText && this.computedFocused && !this.hasValue && !this.readOnly
        );
    }

    override writeValue(value: string | null): void {
        if (value === this.value) {
            return;
        }

        const processed = this.contentProcessor(value || '');

        super.writeValue(processed);

        if (processed !== value) {
            this.control?.setValue(processed, {
                onlySelf: false,
                emitEvent: false,
                emitModelToViewChange: false,
                emitViewToModelChange: false,
            });
        }
    }

    onActiveZone(focused: boolean): void {
        this.focused = focused;
        this.updateFocused(focused);
        this.control?.updateValueAndValidity();
    }

    onModelChange(value: string): void {
        this.value = value;
    }

    addAnchor(anchor: string): void {
        this.editor?.setAnchor(anchor);
    }

    removeAnchor(): void {
        this.editor?.removeAnchor();
    }

    addLink(link: string): void {
        this.editor?.selectClosest();
        this.editor?.setLink(link);
    }

    removeLink(): void {
        this.editor?.unsetLink();
    }

    focus(event: MouseEvent): void {
        if (this.nativeFocusableElement?.contains(event.target as Node | null)) {
            return;
        }

        event.preventDefault();
        this.nativeFocusableElement?.focus();
    }

    override ngOnDestroy(): void {
        this.editor?.destroy();
    }

    protected getFallbackValue(): string {
        return '';
    }

    private readonly isSelectionLink = (range: Range): boolean =>
        this.currentFocusedNodeIsTextAnchor(range) ||
        this.currentFocusedNodeIsImageAnchor;

    /**
     * @description:
     * The commonAncestorContainer not always relevant node element in Range,
     * so the focusNode is used for the correct behaviour from the selection,
     * which is the actual element at the moment
     */
    private currentFocusedNodeIsTextAnchor(range: Range): boolean {
        return (
            !!range.startContainer.parentElement
                ?.closest('a')
                ?.contains(this.focusNode) && tuiIsSafeLinkRange(range)
        );
    }

    private get focusNode(): Node | null {
        return this.doc.getSelection()?.focusNode ?? null;
    }

    private get hasValue(): boolean {
        return !!this.value;
    }

    private get currentFocusedNodeIsImageAnchor(): boolean {
        return (
            this.focusNode?.nodeName === 'A' &&
            ['IMG', 'TUI-IMAGE-EDITOR'].includes(this.focusNode?.childNodes[0]?.nodeName)
        );
    }

    private patchContentEditableElement(): void {
        this.nativeFocusableElement?.setAttribute('translate', this.options.translate);
        this.nativeFocusableElement?.setAttribute(
            'spellcheck',
            String(this.options.spellcheck),
        );
    }
}
