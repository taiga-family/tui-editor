(self.webpackChunkeditor_demo=self.webpackChunkeditor_demo||[]).push([[3346],{63346:n=>{n.exports="import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';\nimport {FormControl, ReactiveFormsModule} from '@angular/forms';\nimport {\n    TUI_EDITOR_EXTENSIONS,\n    TuiEditorComponent,\n    tuiEditorOptionsProvider,\n    TuiEditorSocketComponent,\n    TuiEditorTool,\n} from '@tinkoff/tui-editor';\nimport {mergeAttributes} from '@tiptap/core';\n\n@Component({\n    standalone: true,\n    selector: 'tui-editor-font-example-1',\n    imports: [ReactiveFormsModule, TuiEditorComponent, TuiEditorSocketComponent],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation: ViewEncapsulation.None,\n    changeDetection: ChangeDetectionStrategy.OnPush,\n    providers: [\n        tuiEditorOptionsProvider({\n            fontOptions: () => [\n                {\n                    name: 'H1',\n                    headingLevel: 1,\n                    ngClass: 'text-h1',\n                },\n                {\n                    name: 'H2',\n                    headingLevel: 2,\n                    ngClass: 'text-h2',\n                },\n                {\n                    name: 'H3',\n                    headingLevel: 3,\n                    ngClass: 'text-h3',\n                },\n                {\n                    name: 'H4',\n                    headingLevel: 4,\n                    ngClass: 'text-h4',\n                },\n                {\n                    name: 'H5',\n                    headingLevel: 5,\n                    ngClass: 'text-h5',\n                },\n                {\n                    name: 'H6',\n                    headingLevel: 6,\n                    ngClass: 'text-h6',\n                },\n            ],\n        }),\n        {\n            provide: TUI_EDITOR_EXTENSIONS,\n            useValue: [\n                import('@tinkoff/tui-editor').then(({TuiStarterKit}) => TuiStarterKit),\n                import('@tiptap/extension-text-style').then(\n                    ({default: TextStyle}) => TextStyle,\n                ),\n                import('@tiptap/extension-heading').then(({default: Heading}) =>\n                    Heading.configure({levels: [1, 2, 3, 4, 5, 6]})\n                        // @note: if you want to add custom css classes\n                        // then you need customize Heading extension\n                        .extend({\n                            renderHTML({node, HTMLAttributes}) {\n                                type Levels = 1 | 2 | 3 | 4 | 5 | 6;\n\n                                const classes: Record<Levels, string> = {\n                                    1: 'text-h1',\n                                    2: 'text-h2',\n                                    3: 'text-h3',\n                                    4: 'text-h4',\n                                    5: 'text-h5',\n                                    6: 'text-h6',\n                                };\n\n                                const hasLevel = this.options.levels.includes(\n                                    node.attrs.level,\n                                );\n                                const level: Levels = hasLevel\n                                    ? node.attrs.level\n                                    : this.options.levels[0];\n\n                                return [\n                                    `h${level}`,\n                                    mergeAttributes(\n                                        this.options.HTMLAttributes,\n                                        HTMLAttributes,\n                                        {\n                                            class: `${classes[level]}`,\n                                        },\n                                    ),\n                                    0,\n                                ];\n                            },\n                        }),\n                ),\n            ],\n        },\n    ],\n})\nexport class TuiEditorFontExample1 {\n    readonly builtInTools = [TuiEditorTool.Undo, TuiEditorTool.Size];\n\n    control = new FormControl(`\n        <h1>This is a 1st level heading</h1>\n        <h2>This is a 2nd level heading</h2>\n        <h3>This is a 3rd level heading</h3>\n        <h4>This is a 4th level heading</h4>\n        <h5>This is a 5th level heading</h5>\n        <h6>This is a 6th level heading</h6>\n        <p>This is a paragraph</p>\n    `);\n}\n"}}]);