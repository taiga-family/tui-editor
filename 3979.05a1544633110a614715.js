(self.webpackChunktui_editor=self.webpackChunktui_editor||[]).push([[3979],{33979:o=>{o.exports="import {ChangeDetectionStrategy, Component} from '@angular/core';\nimport {FormControl} from '@angular/forms';\n\nimport {TUI_EDITOR_EXTENSIONS, TuiEditorTool} from '../../../../../../../../tui-editor';\n\n@Component({\n    selector: 'tui-editor-color-picker-tool-example-1',\n    templateUrl: './index.html',\n    changeDetection: ChangeDetectionStrategy.OnPush,\n    providers: [\n        {\n            provide: TUI_EDITOR_EXTENSIONS,\n            useValue: [\n                import('../../../../../../../../tui-editor/extensions/starter-kit').then(\n                    ({StarterKit}) => StarterKit,\n                ),\n                import('@tiptap/extension-text-style').then(\n                    ({default: TextStyle}) => TextStyle,\n                ),\n                import('../../../../../../../../tui-editor/extensions/font-color').then(\n                    ({FontColor}) => FontColor,\n                ),\n                import(\n                    '../../../../../../../../tui-editor/extensions/background-color'\n                ).then(({BackgroundColor}) => BackgroundColor),\n            ],\n        },\n    ],\n})\nexport class TuiEditorColorPickerToolExample1 {\n    readonly builtInTools = [TuiEditorTool.Undo];\n\n    readonly control = new FormControl('');\n}\n"}}]);