(self.webpackChunkeditor_demo=self.webpackChunkeditor_demo||[]).push([[3732],{83732:n=>{n.exports="import {ChangeDetectionStrategy, Component} from '@angular/core';\nimport {FormControl, ReactiveFormsModule, Validators} from '@angular/forms';\nimport {\n    TUI_EDITOR_DEFAULT_EXTENSIONS,\n    TUI_EDITOR_EXTENSIONS,\n    TUI_EDITOR_VALUE_TRANSFORMER,\n    TuiEditorComponent,\n    TuiEditorSocketComponent,\n} from '@tbank/tui-editor';\n\nimport {ExampleEditorCleanupHtmlTransformer} from './transformer';\n\n@Component({\n    standalone: true,\n    imports: [ReactiveFormsModule, TuiEditorComponent, TuiEditorSocketComponent],\n    templateUrl: './index.html',\n    changeDetection: ChangeDetectionStrategy.OnPush,\n    providers: [\n        {\n            provide: TUI_EDITOR_EXTENSIONS,\n            useValue: TUI_EDITOR_DEFAULT_EXTENSIONS,\n        },\n        {\n            provide: TUI_EDITOR_VALUE_TRANSFORMER,\n            useClass: ExampleEditorCleanupHtmlTransformer,\n        },\n    ],\n})\nexport default class ExampleComponent {\n    protected control = new FormControl(\n        '<p class=\"t-content\">TipTap Editor</p>',\n        Validators.required,\n    );\n}\n"}}]);