(self.webpackChunkeditor_demo=self.webpackChunkeditor_demo||[]).push([[5499],{25499:o=>{o.exports="import {ChangeDetectionStrategy, Component} from '@angular/core';\nimport {FormControl, ReactiveFormsModule} from '@angular/forms';\nimport {TuiDestroyService} from '@taiga-ui/cdk';\nimport {\n    TUI_EDITOR_EXTENSIONS,\n    TuiEditorComponent,\n    TuiEditorSocketComponent,\n    TuiEditorTool,\n} from '@tinkoff/tui-editor';\n\n@Component({\n    standalone: true,\n    selector: 'tui-editor-groups-example-3',\n    imports: [ReactiveFormsModule, TuiEditorComponent, TuiEditorSocketComponent],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection: ChangeDetectionStrategy.OnPush,\n    providers: [\n        TuiDestroyService,\n        {\n            provide: TUI_EDITOR_EXTENSIONS,\n            useValue: [\n                import('@tinkoff/tui-editor').then(({TuiStarterKit}) => TuiStarterKit),\n                import('@tinkoff/tui-editor').then(({tuiCreateGroupExtension}) =>\n                    tuiCreateGroupExtension({\n                        draggable: false,\n\n                        // @note: you can override css styles with your own classes\n                        groupNodeClass: 'group',\n                        groupPointerNodeClass: '', // anyway element doesn't exists if `draggable` is false\n                    }),\n                ),\n            ],\n        },\n    ],\n})\nexport class TuiEditorGroupExample3 {\n    readonly builtInTools = [TuiEditorTool.Undo, TuiEditorTool.Group];\n\n    control = new FormControl('');\n\n    constructor() {\n        this.control.patchValue(\n            '<p>This is a boring paragraph.</p><div data-type=\"group\"><p>And another paragraph.</p><div data-type=\"group\"><p>And a nested paragraph.</p><div data-type=\"group\"><p>But can we go deeper?</p></div></div></div><p>Let’s finish with a boring paragraph.</p>',\n        );\n    }\n}\n"}}]);