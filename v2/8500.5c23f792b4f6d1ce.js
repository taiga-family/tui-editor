(self.webpackChunkeditor_demo=self.webpackChunkeditor_demo||[]).push([[8500],{68500:o=>{o.exports="import {AsyncPipe} from '@angular/common';\nimport {ChangeDetectionStrategy, Component} from '@angular/core';\nimport {TuiButtonModule, TuiHostedDropdownModule} from '@taiga-ui/core';\nimport {TuiPaletteComponent} from '@tinkoff/tui-editor';\nimport {BehaviorSubject} from 'rxjs';\n\n@Component({\n    standalone: true,\n    selector: 'tui-color-picker-example-3',\n    imports: [AsyncPipe, TuiButtonModule, TuiHostedDropdownModule, TuiPaletteComponent],\n    templateUrl: './index.html',\n    changeDetection: ChangeDetectionStrategy.OnPush,\n})\nexport class TuiColorPickerExample3 {\n    colors = new Map([\n        ['blue', 'var(--tui-info-fill)'],\n        ['green', 'var(--tui-success-fill)'],\n        ['red', 'var(--tui-error-fill)'],\n    ]);\n\n    color$ = new BehaviorSubject('var(--tui-success-fill)');\n\n    updateColor(color: string): void {\n        this.color$.next(color);\n    }\n}\n"}}]);