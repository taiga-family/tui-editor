(self.webpackChunkeditor_demo=self.webpackChunkeditor_demo||[]).push([[1820],{68500:e=>{e.exports="import {AsyncPipe} from '@angular/common';\nimport {ChangeDetectionStrategy, Component} from '@angular/core';\nimport {TuiButtonDirective, TuiHostedDropdownModule} from '@taiga-ui/core';\nimport {TuiPalette} from '@tbank/tui-editor';\nimport {BehaviorSubject} from 'rxjs';\n\n@Component({\n    standalone: true,\n    imports: [AsyncPipe, TuiButtonDirective, TuiHostedDropdownModule, TuiPalette],\n    templateUrl: './index.html',\n    changeDetection: ChangeDetectionStrategy.OnPush,\n})\nexport default class Example {\n    protected colors = new Map([\n        ['blue', 'var(--tui-info-fill)'],\n        ['green', 'var(--tui-success-fill)'],\n        ['red', 'var(--tui-error-fill)'],\n    ]);\n\n    protected color$ = new BehaviorSubject('var(--tui-success-fill)');\n\n    protected updateColor(color: string): void {\n        this.color$.next(color);\n    }\n}\n"}}]);