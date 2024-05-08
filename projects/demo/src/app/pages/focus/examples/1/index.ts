import {ChangeDetectionStrategy, Component, Injector} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {
    TUI_EDITOR_EXTENSIONS,
    TuiEditorComponent,
    TuiEditorSocketComponent,
    TuiEditorTool,
} from '@tinkoff/tui-editor';

@Component({
    standalone: true,
    imports: [ReactiveFormsModule, TuiEditorComponent, TuiEditorSocketComponent],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: TUI_EDITOR_EXTENSIONS,
            deps: [Injector],
            useFactory: (injector: Injector) => [
                import('@tinkoff/tui-editor')
                    .then(({TuiStarterKit}) => TuiStarterKit)
                    .then(extension => extension.configure({heading: {levels: [1, 2]}})),
                import('@tiptap/extension-text-align').then(({default: TextAlign}) =>
                    TextAlign.configure({types: ['heading', 'paragraph']}),
                ),
                import('@tiptap/extension-text-style').then(
                    ({default: TextStyle}) => TextStyle,
                ),
                import('@tiptap/extension-underline').then(
                    ({default: Underline}) => Underline,
                ),
                import('@tiptap/extension-subscript').then(
                    ({default: Subscript}) => Subscript,
                ),
                import('@tiptap/extension-superscript').then(
                    ({default: Superscript}) => Superscript,
                ),
                import('@tinkoff/tui-editor').then(({TuiFontColor}) => TuiFontColor),
                import('@tinkoff/tui-editor').then(({TuiLink}) => TuiLink),
                import('@tinkoff/tui-editor').then(({TuiJumpAnchor}) => TuiJumpAnchor),
                import('@tinkoff/tui-editor').then(({TuiFileLink}) => TuiFileLink),
                import('@tinkoff/tui-editor').then(
                    ({TuiBackgroundColor}) => TuiBackgroundColor,
                ),
                import('@tinkoff/tui-editor').then(({TuiTable}) =>
                    TuiTable.configure({resizable: true}),
                ),
                import('@tiptap/extension-table-row').then(
                    ({default: TableRow}) => TableRow,
                ),
                import('@tiptap/extension-table-cell').then(
                    ({default: TableCell}) => TableCell,
                ),
                import('@tiptap/extension-table-header').then(
                    ({TableHeader}) => TableHeader,
                ),
                import('@tinkoff/tui-editor').then(
                    ({TuiTabExtension}) => TuiTabExtension,
                ),
                import('@tinkoff/tui-editor').then(
                    ({TableCellBackground}) => TableCellBackground,
                ),
                import('@tinkoff/tui-editor').then(
                    ({TuiDetailsContent}) => TuiDetailsContent,
                ),
                import('@tinkoff/tui-editor').then(({TuiDetails}) => TuiDetails),
                import('@tinkoff/tui-editor').then(({TuiSummary}) => TuiSummary),
                import('@tinkoff/tui-editor').then(({TuiFontSize}) => TuiFontSize),
                import('@tinkoff/tui-editor').then(({tuiCreateImageEditorExtension}) =>
                    tuiCreateImageEditorExtension({injector}),
                ),
                import('@tiptap/extension-focus').then(({FocusClasses}) =>
                    FocusClasses.configure({
                        className: 'has-focus',

                        /**
                         * @description:
                         * Apply the class to 'all', the 'shallowest' or the 'deepest' node.
                         *
                         * Default: 'all'
                         */
                        mode: 'shallowest',
                    }),
                ),
            ],
        },
    ],
})
export default class ExampleComponent {
    protected readonly builtInTools = [
        TuiEditorTool.Undo,
        TuiEditorTool.Img,
        TuiEditorTool.Link,
        TuiEditorTool.Anchor,
    ];

    protected control = new FormControl(
        '<img src="./assets/images/piece-and-war.jpg" width="732" alt="" title="" /><p><strong>WYSIWYG</strong> (<em>What you see is what you get</em>) — <u>Rich Text Editor</u> for using with Angular <sup>forms.</sup></p><h1>Heading</h1><p>Lorem ipsum dolor sit amet consectetur <a target="_blank" rel="noopener noreferrer nofollow" href="http://taiga-ui.dev">adipiscing elit</a>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim</p><blockquote><p> ad minim veniam, quis nostrud exercitation <span style="color: rgb(196, 11, 8); background-color: rgb(221, 228, 237)">ullamco</span>, laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p></blockquote><p style="text-align: right">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><pre><code>class EditorExample {}</code></pre><table><tbody><tr><th colspan="1" rowspan="1"><p></p></th><th colspan="1" rowspan="1"><p>Free</p></th><th colspan="1" rowspan="1"><p>Pro</p></th></tr><tr><td colspan="1" rowspan="1"><p>24/7 support</p></td><td style="background: rgb(255, 221, 41)" colspan="1" rowspan="1"><p>+</p></td><td style="background: rgb(57, 181, 77)" colspan="1" rowspan="1"><p>+</p></td></tr></tbody></table><p style="text-align: center"><code>Code in text</code></p>',
    );
}
