import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import type {TuiDocExample} from '@taiga-ui/addon-doc';
import {
    TuiDocExampleModule,
    TuiDocPageModule,
    TuiTextCodeModule,
} from '@taiga-ui/addon-doc';
import {TuiLinkModule} from '@taiga-ui/core';
import {TUI_EDITOR_DEFAULT_EXTENSIONS, TUI_EDITOR_EXTENSIONS} from '@tinkoff/tui-editor';

@Component({
    standalone: true,
    imports: [
        TuiDocPageModule,
        TuiLinkModule,
        RouterLink,
        TuiDocExampleModule,
        TuiTextCodeModule,
    ],
    templateUrl: './index.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: TUI_EDITOR_EXTENSIONS,
            useValue: TUI_EDITOR_DEFAULT_EXTENSIONS,
        },
    ],
})
export default class ExampleComponent {
    protected readonly component1 = import('./examples/1');
    protected readonly example1: TuiDocExample = {
        HTML: import('./examples/1/index.html?raw'),
        TypeScript: import('./examples/1/index.ts?raw'),
        LESS: import('./examples/1/index.less?raw'),
        'image-tool/paste.extension.ts': import(
            './examples/1/image-tool/paste.extension.ts?raw'
        ),
        'image-tool/image-tool.component.ts': import(
            './examples/1/image-tool/image-tool.component.ts?raw'
        ),
        'image-tool/image-tool.template.html': import(
            './examples/1/image-tool/image-tool.template.html?raw'
        ),
        'image-tool/image-tool.styles.less': import(
            './examples/1/image-tool/image-tool.styles.less?raw'
        ),
    };
}
