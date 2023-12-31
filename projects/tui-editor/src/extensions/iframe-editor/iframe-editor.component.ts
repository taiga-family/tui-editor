import {DOCUMENT} from '@angular/common';
import {ChangeDetectionStrategy, Component, Inject, Self} from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import {TuiDestroyService} from '@taiga-ui/cdk';

import {AbstractTuiEditorResizable} from '../../components/editor-resizable/editor-resizable.abstract';
import {TuiEditorResizableComponent} from '../../components/editor-resizable/editor-resizable.component';
import {
    TUI_IFRAME_EDITOR_OPTIONS,
    TuiEditableIframe,
    TuiEditableIframeOptions,
} from './iframe-editor.options';

@Component({
    standalone: true,
    selector: 'tui-iframe-editor',
    imports: [TuiEditorResizableComponent],
    templateUrl: './iframe-editor.component.html',
    styleUrls: ['./iframe-editor.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [TuiDestroyService],
})
export class TuiIframeEditorComponent extends AbstractTuiEditorResizable<TuiEditableIframe> {
    get src(): SafeResourceUrl {
        return this.sanitizer.bypassSecurityTrustResourceUrl(this.attrs.src ?? '');
    }

    constructor(
        @Inject(TUI_IFRAME_EDITOR_OPTIONS) readonly options: TuiEditableIframeOptions,
        @Inject(DOCUMENT) doc: Document,
        @Inject(DomSanitizer) private readonly sanitizer: DomSanitizer,
        @Self()
        @Inject(TuiDestroyService)
        destroy$: TuiDestroyService,
    ) {
        super(doc, destroy$);
    }

    updateSize([width, height]: readonly [width: number, height: number]): void {
        this.currentWidth = Math.max(
            this.options.minWidth,
            Math.min(this.options.maxWidth, width),
        );

        this.currentHeight = Math.max(
            this.options.minHeight,
            Math.min(this.options.maxHeight, height),
        );
    }
}
