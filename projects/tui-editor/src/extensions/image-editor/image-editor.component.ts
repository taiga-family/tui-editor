import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    HostBinding,
    HostListener,
    inject,
} from '@angular/core';
import type {SafeResourceUrl} from '@angular/platform-browser';
import {DomSanitizer} from '@angular/platform-browser';
import {WINDOW} from '@ng-web-apis/common';
import {TuiDestroyService} from '@taiga-ui/cdk';

import {AbstractTuiEditorResizable} from '../../components/editor-resizable/editor-resizable.abstract';
import {TuiEditorResizableComponent} from '../../components/editor-resizable/editor-resizable.component';
import type {TuiEditableImage} from './image-editor.options';
import {TUI_IMAGE_EDITOR_OPTIONS} from './image-editor.options';

@Component({
    standalone: true,
    selector: 'tui-image-editor',
    imports: [TuiEditorResizableComponent],
    templateUrl: './image-editor.component.html',
    styleUrls: ['./image-editor.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [TuiDestroyService],
})
export class TuiImageEditorComponent extends AbstractTuiEditorResizable<TuiEditableImage> {
    private readonly sanitizer = inject(DomSanitizer);
    private readonly el = inject(ElementRef);
    private readonly win = inject(WINDOW);

    @HostBinding('attr.contenteditable')
    protected contenteditable = true;

    protected focused = false;

    protected readonly options = inject(TUI_IMAGE_EDITOR_OPTIONS);

    public override get height(): number | string | null {
        return null;
    }

    public updateSize([width]: readonly [width: number, height: number]): void {
        this.currentWidth = Math.max(
            this.options.minWidth,
            Math.min(this.options.maxWidth, width),
        );

        this.attrs.width = this.currentWidth;

        // force update
        this.editor.commands.setContent(this.editor.getJSON());
    }

    @HostBinding('attr.data-drag-handle')
    protected get dragHandle(): '' | null {
        return this.attrs.draggable ?? null;
    }

    protected get alt(): string {
        return this.attrs.alt || '';
    }

    protected get title(): string {
        return this.attrs.title || '';
    }

    protected get src(): SafeResourceUrl {
        return this.sanitizer.bypassSecurityTrustResourceUrl(this.attrs.src);
    }

    @HostListener('document:click.silent', ['$event.target'])
    protected currentTargetIsFocused(node: Node): void {
        this.focused = this.el.nativeElement.contains(node);

        if (this.focused) {
            this.selectFakeText();
        }
    }

    private selectFakeText(): void {
        if (this.win.document) {
            const range = this.win.document.createRange();

            this.el.nativeElement.querySelector('p')?.focus();

            range.selectNode(this.el.nativeElement);
            this.win.getSelection()?.removeAllRanges();
            this.win.getSelection()?.addRange(range);
        }
    }
}
