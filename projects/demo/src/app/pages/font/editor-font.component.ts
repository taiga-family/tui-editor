import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TuiDocExample, TuiDocExampleModule, TuiDocPageModule} from '@taiga-ui/addon-doc';

import {TuiEditorFontExample1} from './examples/1';
import {TuiEditorFontExample2} from './examples/2';
import {TuiEditorFontExample3} from './examples/3';

@Component({
    standalone: true,
    selector: 'editor-font',
    imports: [
        TuiEditorFontExample3,
        TuiDocExampleModule,
        TuiDocPageModule,
        TuiEditorFontExample1,
        TuiEditorFontExample2,
    ],
    templateUrl: './editor-font.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ExampleTuiEditorFontComponent {
    readonly example1: TuiDocExample = {
        TypeScript: import('./examples/1/index.ts?raw'),
        HTML: import('./examples/1/index.html?raw'),
        LESS: import('./examples/1/index.less?raw'),
    };

    readonly example2: TuiDocExample = {
        TypeScript: import('./examples/2/index.ts?raw'),
        HTML: import('./examples/2/index.html?raw'),
    };

    readonly example3: TuiDocExample = {
        TypeScript: import('./examples/3/index.ts?raw'),
        HTML: import('./examples/3/index.html?raw'),
        'font-size-tool/font-size-tool.component.ts': import(
            './examples/3/font-size-tool/font-size-tool.component.ts?raw'
        ),
        'font-size-tool/font-size-tool.template.html': import(
            './examples/3/font-size-tool/font-size-tool.template.html?raw'
        ),
    };
}
