import {AsyncPipe, DOCUMENT} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    inject,
    Injector,
    ViewChild,
} from '@angular/core';
import type {AbstractControl, ValidationErrors} from '@angular/forms';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {
    TUI_IS_STACKBLITZ,
    TuiDestroyService,
    TuiValidationError,
    TuiValidatorDirective,
} from '@taiga-ui/cdk';
import {TuiErrorModule, TuiLoaderModule} from '@taiga-ui/core';
import {TuiFieldErrorPipeModule} from '@taiga-ui/kit';
import {
    TUI_EDITOR_EXTENSIONS,
    TUI_IMAGE_EDITOR_OPTIONS,
    TUI_IMAGE_LOADER,
    TuiEditorComponent,
    TuiEditorSocketComponent,
    TuiEditorTool,
} from '@tinkoff/tui-editor';

import {imageLoader} from './image-loader';
import {ImgbbService} from './imgbb.service';

@Component({
    standalone: true,
    imports: [
        TuiErrorModule,
        TuiLoaderModule,
        AsyncPipe,
        TuiValidatorDirective,
        ReactiveFormsModule,
        TuiFieldErrorPipeModule,
        TuiEditorSocketComponent,
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
                import('@tiptap/extension-image').then(({default: Image}) =>
                    Image.configure({inline: true, allowBase64: true}),
                ),
            ],
        },
        {
            provide: TUI_IMAGE_EDITOR_OPTIONS,
            useValue: {
                minWidth: 100,
                maxWidth: 400,
            },
        },
        {
            provide: TUI_IMAGE_LOADER,
            useFactory: imageLoader,
            deps: [ImgbbService],
        },
    ],
})
export default class ExampleComponent {
    @ViewChild(TuiEditorComponent, {static: true})
    private readonly editor?: TuiEditorComponent;

    private readonly isStackblitz = inject(TUI_IS_STACKBLITZ);
    private readonly relativePath = this.isStackblitz ? 'https://taiga-ui.dev/' : '';

    protected readonly doc = inject(DOCUMENT);
    protected readonly imgbbService = inject(ImgbbService);
    protected readonly builtInTools = [TuiEditorTool.Undo, TuiEditorTool.Img];

    protected control = new FormControl('');

    constructor() {
        this.control.patchValue(
            `
                <img data-type="image-editor" src="${this.relativePath}assets/images/lumberjack.png" width="300">
                <p>Try to drag right border of image!</p>
                <p>To change min/max size of image use token <code>TUI_IMAGE_EDITOR_OPTIONS</code>.</p>
                <img src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDUwIDUwIiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiPjxzdHlsZT4uYXtmaWxsOiNkZDAwMzF9LmJ7ZmlsbDojYzMwMDJmfS5je2ZpbGw6I2ZmZn08L3N0eWxlPjxwYXRoIGNsYXNzPSJhIiBkPSJtNDMuNiAxMi42bC0yLjggMjQuNy0xNS44IDguNy0xNS44LTguNy0yLjgtMjQuNyAxOC42LTYuNnoiLz48cGF0aCBjbGFzcz0iYiIgZD0ibTI1IDZsMTguNiA2LjYtMi44IDI0LjctMTUuOCA4Ljd2LTE1LjMtMjAuMy00LjR6Ii8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGFzcz0iYyIgZD0ibTM2LjYgMzYuNWgtNC4zbC0yLjQtNS44aC05LjlsLTIuMyA1LjhoLTQuM2wxMS42LTI2LjF6bS0xMS42LTE3LjZsLTMuNCA4LjJoNi44eiIvPjwvc3ZnPg==" />`,
        );
    }

    protected readonly validator = ({value}: AbstractControl): ValidationErrors | null =>
        this.editor?.focused ||
        this.imgbbService.isLoading ||
        !this.doc.hasFocus() || // possible that file dialog is open
        value.length
            ? null
            : {
                  empty: new TuiValidationError('ERROR: content must not be empty'),
              };
}
