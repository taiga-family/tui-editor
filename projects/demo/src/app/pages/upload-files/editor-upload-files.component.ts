import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {TuiDocExample, TuiDocExampleModule, TuiDocPageModule} from '@taiga-ui/addon-doc';
import {TuiLinkModule} from '@taiga-ui/core';
import {defaultEditorExtensions, TUI_EDITOR_EXTENSIONS} from '@tinkoff/tui-editor';

import {TuiEditorUploadFilesExample1} from './examples/1';

@Component({
    standalone: true,
    selector: 'editor-upload-files',
    imports: [
        TuiDocExampleModule,
        TuiEditorUploadFilesExample1,
        TuiDocPageModule,
        TuiLinkModule,
        RouterLink,
    ],
    templateUrl: './editor-upload-files.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: TUI_EDITOR_EXTENSIONS,
            useValue: defaultEditorExtensions,
        },
    ],
})
export default class ExampleTuiEditorUploadFilesComponent {
    readonly example1: TuiDocExample = {
        TypeScript: import('./examples/1/index.ts?raw'),
        HTML: import('./examples/1/index.html?raw'),
        LESS: import('./examples/1/index.less?raw'),
        './filesio.service.ts': import('./examples/1/filesio.service.ts?raw'),
        './file-loader.ts': import('./examples/1/file-loader.ts?raw'),
    };
}
