import {Directive, ElementRef, inject, Input, Output, Renderer2} from '@angular/core';
import {TuiDestroyService} from '@taiga-ui/cdk';
import {takeUntil} from 'rxjs';

import {INITIALIZATION_TIPTAP_CONTAINER, TIPTAP_EDITOR} from '../../tokens/tiptap-editor';
import {TuiTiptapEditorService} from './tiptap-editor.service';

@Directive({
    standalone: true,
    selector: '[tuiTiptapEditor]',
    providers: [TuiDestroyService],
})
export class TuiTiptapEditorDirective {
    private readonly el = inject(ElementRef);
    private readonly renderer = inject(Renderer2);
    private readonly editor = inject(TuiTiptapEditorService);

    @Output()
    public readonly valueChange = this.editor.valueChange$;

    @Output()
    public readonly stateChange = this.editor.stateChange$;

    protected editorContainer = inject(INITIALIZATION_TIPTAP_CONTAINER);

    constructor() {
        inject(TIPTAP_EDITOR)
            .pipe(takeUntil(inject(TuiDestroyService, {self: true})))
            .subscribe(() => {
                this.renderer.appendChild(this.el.nativeElement, this.editorContainer);
            });
    }

    @Input()
    public set value(value: string) {
        this.editor.setValue(value);
    }

    @Input()
    public set editable(editable: boolean) {
        this.editor.editable = editable;
    }
}
