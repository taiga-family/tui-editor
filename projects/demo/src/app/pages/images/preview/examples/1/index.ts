import {ChangeDetectionStrategy, Component, Inject, Injector} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {TuiPreviewModule} from '@taiga-ui/addon-preview';
import {TUI_IS_STACKBLITZ, TuiDestroyService} from '@taiga-ui/cdk';
import {
    TUI_EDITOR_EXTENSIONS,
    TuiEditorComponent,
    TuiEditorImagePreviewDirective,
    TuiEditorSocketComponent,
    TuiEditorTool,
} from '@tinkoff/tui-editor';

import {ImagePreviewExampleComponent} from './image-preview/image-preview.component';

@Component({
    standalone: true,
    selector: 'tui-editor-preview-images-example-1',
    imports: [
        ImagePreviewExampleComponent,
        ReactiveFormsModule,
        TuiPreviewModule,
        TuiEditorSocketComponent,
        TuiEditorImagePreviewDirective,
        TuiEditorComponent,
    ],
    templateUrl: './index.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        TuiDestroyService,
        {
            provide: TUI_EDITOR_EXTENSIONS,
            deps: [Injector],
            useFactory: (injector: Injector) => [
                import('@tinkoff/tui-editor').then(({TuiStarterKit}) => TuiStarterKit),
                import('@tinkoff/tui-editor').then(({tuiCreateImageEditorExtension}) =>
                    tuiCreateImageEditorExtension({injector}),
                ),
            ],
        },
    ],
})
export class TuiEditorPreviewImagesExample1 {
    private readonly relativePath = this.isStackblitz ? 'https://taiga-ui.dev/' : '';

    readonly builtInTools = [TuiEditorTool.Undo, TuiEditorTool.Img];

    control = new FormControl('');

    constructor(@Inject(TUI_IS_STACKBLITZ) private readonly isStackblitz: boolean) {
        this.control.patchValue(
            `<p>Small image</p><img data-type="image-editor" src="${this.relativePath}assets/images/lumberjack.png" width="300"><p>Big image</p><img data-type="image-editor" src="${this.relativePath}assets/images/big-wallpaper.jpg" width="500">`,
        );
    }
}
