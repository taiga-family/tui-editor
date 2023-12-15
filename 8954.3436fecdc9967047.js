(self.webpackChunkeditor_demo=self.webpackChunkeditor_demo||[]).push([[8954],{28954:n=>{n.exports="import {ChangeDetectionStrategy, Component} from '@angular/core';\nimport {FormControl} from '@angular/forms';\nimport {TUI_EDITOR_EXTENSIONS, TuiEditorTool} from '@tinkoff/tui-editor';\n\n@Component({\n    selector: 'tui-editor-font-example-3',\n    templateUrl: './index.html',\n    changeDetection: ChangeDetectionStrategy.OnPush,\n    providers: [\n        {\n            provide: TUI_EDITOR_EXTENSIONS,\n            useValue: [\n                import('@tinkoff/tui-editor/extensions/starter-kit').then(\n                    ({StarterKit}) => StarterKit,\n                ),\n                import('@tiptap/extension-text-style').then(\n                    ({default: TextStyle}) => TextStyle,\n                ),\n                import('@tinkoff/tui-editor/extensions/font-size').then(\n                    ({TuiFontSize}) => TuiFontSize,\n                ),\n            ],\n        },\n    ],\n})\nexport class TuiEditorFontExample3 {\n    readonly builtInTools = [TuiEditorTool.Undo];\n\n    control = new FormControl(`\n        <p>Hello</p>\n        <p><span style=\"font-size: 24px\">Hello world</span></p>\n    `);\n}\n"}}]);