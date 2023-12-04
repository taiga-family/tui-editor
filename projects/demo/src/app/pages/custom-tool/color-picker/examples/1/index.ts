import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl} from '@angular/forms';

import {TUI_EDITOR_EXTENSIONS, TuiEditorTool} from '../../../../../../../../tui-editor';

@Component({
    selector: 'tui-editor-color-picker-tool-example-1',
    templateUrl: './index.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: TUI_EDITOR_EXTENSIONS,
            useValue: [
                import('../../../../../../../../tui-editor/extensions/starter-kit').then(
                    ({StarterKit}) => StarterKit,
                ),
                import('@tiptap/extension-text-style').then(
                    ({default: TextStyle}) => TextStyle,
                ),
                import('../../../../../../../../tui-editor/extensions/font-color').then(
                    ({FontColor}) => FontColor,
                ),
                import(
                    '../../../../../../../../tui-editor/extensions/background-color'
                ).then(({BackgroundColor}) => BackgroundColor),
            ],
        },
    ],
})
export class TuiEditorColorPickerToolExample1 {
    readonly builtInTools = [TuiEditorTool.Undo];

    readonly control = new FormControl('');
}