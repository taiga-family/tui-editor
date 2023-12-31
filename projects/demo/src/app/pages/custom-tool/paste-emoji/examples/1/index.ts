import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {TuiItemModule} from '@taiga-ui/cdk';
import {TuiSvgModule} from '@taiga-ui/core';
import {
    TUI_EDITOR_EXTENSIONS,
    TuiEditorComponent,
    TuiEditorTool,
} from '@tinkoff/tui-editor';

import {ExampleTuiSmilesToolComponent} from './smiles-tool/smiles-tool.component';

@Component({
    standalone: true,
    selector: 'tui-editor-paste-emoji-tool-example-1',
    imports: [
        TuiSvgModule,
        ExampleTuiSmilesToolComponent,
        TuiItemModule,
        ReactiveFormsModule,
        TuiEditorComponent,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: TUI_EDITOR_EXTENSIONS,
            useValue: [
                import('@tinkoff/tui-editor').then(({TuiStarterKit}) => TuiStarterKit),
                import('./smiles-tool/emoji.extension').then(
                    ({EmojiExtension}) => EmojiExtension,
                ),
            ],
        },
    ],
})
export class TuiEditorPasteEmojiToolExample1 {
    readonly builtInTools = [TuiEditorTool.Undo];
    readonly control = new FormControl('');
}
