(self.webpackChunktui_editor=self.webpackChunktui_editor||[]).push([[1239],{71239:n=>{n.exports="import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';\nimport {FormControl} from '@angular/forms';\nimport {tuiEditorOptionsProvider} from '@tinkoff/tui-editor';\n\n@Component({\n    selector: 'tui-editor-appearance-example-1',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation: ViewEncapsulation.None,\n    changeDetection: ChangeDetectionStrategy.OnPush,\n    providers: [\n        tuiEditorOptionsProvider({\n            appearance: 'no-border',\n        }),\n    ],\n})\nexport class TuiEditorAppearanceExample1 {\n    readonly control = new FormControl('');\n    readonly builtInTools = [];\n}\n"}}]);