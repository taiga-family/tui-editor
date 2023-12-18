import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {tuiRawLoad, tuiTryParseMarkdownCodeBlock} from '@taiga-ui/addon-doc';
import {
    TUI_EDITOR_EXTENSIONS,
    TuiEditorModule,
    TuiEditorSocketModule,
    TuiEditorTool,
} from '@tinkoff/tui-editor';

@Component({
    standalone: true,
    selector: 'tui-editor-code-block-example-1',
    imports: [TuiEditorSocketModule, TuiEditorModule, ReactiveFormsModule],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: TUI_EDITOR_EXTENSIONS,
            useFactory: () => [
                import('@tinkoff/tui-editor/extensions/starter-kit').then(
                    ({StarterKit}) => StarterKit,
                ),
            ],
        },
    ],
})
export class TuiEditorCodeBlockExample1 implements OnInit {
    readonly builtInTools = [TuiEditorTool.Undo, TuiEditorTool.Code];

    control = new FormControl('');

    async ngOnInit(): Promise<void> {
        const [code] = tuiTryParseMarkdownCodeBlock(
            await tuiRawLoad(import('./example.md?raw')),
        );

        this.control.patchValue(code);
    }
}
