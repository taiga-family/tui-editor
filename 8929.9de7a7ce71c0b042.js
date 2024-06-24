(self.webpackChunkeditor_demo=self.webpackChunkeditor_demo||[]).push([[8929],{98929:t=>{t.exports="import {ChangeDetectionStrategy, Component, ViewChild} from '@angular/core';\nimport {FormControl, ReactiveFormsModule} from '@angular/forms';\nimport {TuiItem} from '@taiga-ui/cdk';\nimport {TuiButton} from '@taiga-ui/core';\nimport {\n    TUI_EDITOR_EXTENSIONS,\n    TuiEditor,\n    TuiEditorSocket,\n    TuiEditorTool,\n} from '@taiga-ui/editor';\n\n@Component({\n    standalone: true,\n    imports: [TuiButton, TuiItem, ReactiveFormsModule, TuiEditorSocket, TuiEditor],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection: ChangeDetectionStrategy.OnPush,\n    providers: [\n        {\n            provide: TUI_EDITOR_EXTENSIONS,\n            useValue: [\n                import('@taiga-ui/editor').then(({TuiStarterKit}) => TuiStarterKit),\n                import('@tiptap/extension-text-align').then(({default: TextAlign}) =>\n                    TextAlign.configure({types: ['heading', 'paragraph']}),\n                ),\n                import('@tiptap/extension-text-style').then(\n                    ({default: TextStyle}) => TextStyle,\n                ),\n                import('@tiptap/extension-highlight').then(({Highlight}) =>\n                    Highlight.configure({\n                        multicolor: true,\n                        HTMLAttributes: {\n                            class: 'marked',\n                        },\n                    }),\n                ),\n            ],\n        },\n    ],\n})\nexport default class Example {\n    @ViewChild(TuiEditor)\n    private readonly wysiwyg?: TuiEditor;\n\n    protected readonly builtInTools = [TuiEditorTool.Undo];\n\n    protected control = new FormControl(\n        `\n        <p>This isn’t highlighted.</p>\n        <p>\n            <mark data-color=\"#e1d0fb\">Grammar</mark>\n            <mark data-color=\"#c8eefc\">can</mark> be tricky,\n            <mark style=\"background-color: #fae498\">especially</mark>\n            for the <mark>uninitiated</mark>\n        </p>\n        `,\n    );\n\n    protected toggleHighlight(): void {\n        this.wysiwyg?.editor\n            ?.getOriginTiptapEditor()\n            .commands.toggleHighlight({color: '#c8eefc'});\n    }\n}\n"}}]);