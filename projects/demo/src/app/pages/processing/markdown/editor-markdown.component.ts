import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {
    TUI_DOC_EXAMPLE_MARKDOWN_CODE_PROCESSOR,
    TuiDocExample,
    TuiDocExampleModule,
    TuiDocPageModule,
} from '@taiga-ui/addon-doc';
import {TuiLinkModule} from '@taiga-ui/core';
import {defaultEditorExtensions, TUI_EDITOR_EXTENSIONS} from '@tinkoff/tui-editor';

import {TuiEditorEditorExample1} from './examples/1';

@Component({
    standalone: true,
    selector: 'editor-markdown',
    imports: [
        TuiEditorEditorExample1,
        TuiDocExampleModule,
        TuiDocPageModule,
        TuiLinkModule,
        RouterLink,
    ],
    templateUrl: './editor-markdown.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: TUI_EDITOR_EXTENSIONS,
            useValue: defaultEditorExtensions,
        },
        {
            /**
             * @description:
             * prevent parse 'example.md'
             */
            provide: TUI_DOC_EXAMPLE_MARKDOWN_CODE_PROCESSOR,
            useValue: (value: string): string[] => [value],
        },
    ],
})
export default class ExampleTuiEditorMarkdownComponent {
    readonly example1: TuiDocExample = {
        TypeScript: import('./examples/1/index.ts?raw'),
        HTML: import('./examples/1/index.html?raw'),
        LESS: import('./examples/1/index.less?raw'),
        'example.md': import('./examples/1/example.md?raw'),
    };
}
