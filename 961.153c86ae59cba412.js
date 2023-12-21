(self.webpackChunkeditor_demo=self.webpackChunkeditor_demo||[]).push([[961],{60961:t=>{t.exports="import {ChangeDetectionStrategy, Component, Injector} from '@angular/core';\nimport {FormControl, ReactiveFormsModule} from '@angular/forms';\nimport {\n    TUI_EDITOR_EXTENSIONS,\n    TuiEditorComponent,\n    TuiEditorSocketComponent,\n    TuiEditorTool,\n} from '@tinkoff/tui-editor';\n\n@Component({\n    standalone: true,\n    selector: 'tui-editor-focus-example-1',\n    imports: [ReactiveFormsModule, TuiEditorComponent, TuiEditorSocketComponent],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection: ChangeDetectionStrategy.OnPush,\n    providers: [\n        {\n            provide: TUI_EDITOR_EXTENSIONS,\n            deps: [Injector],\n            useFactory: (injector: Injector) => [\n                import('@tinkoff/tui-editor')\n                    .then(({TuiStarterKit}) => TuiStarterKit)\n                    .then(extension => extension.configure({heading: {levels: [1, 2]}})),\n                import('@tiptap/extension-text-align').then(({default: TextAlign}) =>\n                    TextAlign.configure({types: ['heading', 'paragraph']}),\n                ),\n                import('@tiptap/extension-text-style').then(\n                    ({default: TextStyle}) => TextStyle,\n                ),\n                import('@tiptap/extension-underline').then(\n                    ({default: Underline}) => Underline,\n                ),\n                import('@tiptap/extension-subscript').then(\n                    ({default: Subscript}) => Subscript,\n                ),\n                import('@tiptap/extension-superscript').then(\n                    ({default: Superscript}) => Superscript,\n                ),\n                import('@tinkoff/tui-editor').then(({TuiFontColor}) => TuiFontColor),\n                import('@tinkoff/tui-editor').then(({TuiLink}) => TuiLink),\n                import('@tinkoff/tui-editor').then(({TuiJumpAnchor}) => TuiJumpAnchor),\n                import('@tinkoff/tui-editor').then(({TuiFileLink}) => TuiFileLink),\n                import('@tinkoff/tui-editor').then(\n                    ({TuiBackgroundColor}) => TuiBackgroundColor,\n                ),\n                import('@tinkoff/tui-editor').then(({TuiTable}) =>\n                    TuiTable.configure({resizable: true}),\n                ),\n                import('@tiptap/extension-table-row').then(\n                    ({default: TableRow}) => TableRow,\n                ),\n                import('@tiptap/extension-table-cell').then(\n                    ({default: TableCell}) => TableCell,\n                ),\n                import('@tiptap/extension-table-header').then(\n                    ({TableHeader}) => TableHeader,\n                ),\n                import('@tinkoff/tui-editor').then(\n                    ({TuiTabExtension}) => TuiTabExtension,\n                ),\n                import('@tinkoff/tui-editor').then(\n                    ({TableCellBackground}) => TableCellBackground,\n                ),\n                import('@tinkoff/tui-editor').then(\n                    ({TuiDetailsContent}) => TuiDetailsContent,\n                ),\n                import('@tinkoff/tui-editor').then(({TuiDetails}) => TuiDetails),\n                import('@tinkoff/tui-editor').then(({TuiSummary}) => TuiSummary),\n                import('@tinkoff/tui-editor').then(({TuiFontSize}) => TuiFontSize),\n                import('@tinkoff/tui-editor').then(({tuiCreateImageEditorExtension}) =>\n                    tuiCreateImageEditorExtension({injector}),\n                ),\n                import('@tiptap/extension-focus').then(({FocusClasses}) =>\n                    FocusClasses.configure({\n                        className: 'has-focus',\n\n                        /**\n                         * @description:\n                         * Apply the class to 'all', the 'shallowest' or the 'deepest' node.\n                         *\n                         * Default: 'all'\n                         */\n                        mode: 'shallowest',\n                    }),\n                ),\n            ],\n        },\n    ],\n})\nexport class TuiEditorFocusExample1 {\n    readonly builtInTools = [\n        TuiEditorTool.Undo,\n        TuiEditorTool.Img,\n        TuiEditorTool.Link,\n        TuiEditorTool.Anchor,\n    ];\n\n    control = new FormControl(\n        // eslint-disable-next-line @typescript-eslint/quotes\n        `<img src=\"./assets/images/piece-and-war.jpg\" width=\"732\" alt=\"\" title=\"\" data-type=\"image-editor\"><p><strong>WYSIWYG</strong> (<em>What you see is what you get</em>) — <u>Rich Text Editor</u> for using with Angular <sup>forms.</sup></p><h1>Heading</h1><p>Lorem ipsum dolor sit amet consectetur <a target=\"_blank\" rel=\"noopener noreferrer nofollow\" href=\"http://taiga-ui.dev\">adipiscing elit</a>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim</p><blockquote><p> ad minim veniam, quis nostrud exercitation <span style=\"color: rgb(196, 11, 8); background-color: rgb(221, 228, 237)\">ullamco</span>, laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p></blockquote><p style=\"text-align: right\">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><pre><code>class EditorExample {}</code></pre><table><tbody><tr><th colspan=\"1\" rowspan=\"1\"><p></p></th><th colspan=\"1\" rowspan=\"1\"><p>Free</p></th><th colspan=\"1\" rowspan=\"1\"><p>Pro</p></th></tr><tr><td colspan=\"1\" rowspan=\"1\"><p>24/7 support</p></td><td style=\"background: rgb(255, 221, 41)\" colspan=\"1\" rowspan=\"1\"><p>+</p></td><td style=\"background: rgb(57, 181, 77)\" colspan=\"1\" rowspan=\"1\"><p>+</p></td></tr></tbody></table><p style=\"text-align: center\"><code>Code in text</code></p>`,\n    );\n}\n"}}]);