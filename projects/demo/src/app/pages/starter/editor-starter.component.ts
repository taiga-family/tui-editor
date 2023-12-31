import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {
    TuiDocCodeModule,
    TuiDocDemoModule,
    TuiDocDocumentationModule,
    TuiDocPageModule,
} from '@taiga-ui/addon-doc';
import {TUI_IS_E2E, TuiAutoFocusModule} from '@taiga-ui/cdk';
import {
    defaultEditorExtensions,
    defaultEditorTools,
    TUI_EDITOR_EXTENSIONS,
    TuiEditorComponent,
    TuiEditorSocketComponent,
    TuiEditorTool,
} from '@tinkoff/tui-editor';

@Component({
    standalone: true,
    selector: 'editor-starter-page',
    imports: [
        TuiDocCodeModule,
        TuiDocPageModule,
        TuiDocDemoModule,
        ReactiveFormsModule,
        TuiAutoFocusModule,
        TuiDocDocumentationModule,
        TuiEditorSocketComponent,
        TuiEditorComponent,
    ],
    templateUrl: './editor-starter.template.html',
    styleUrls: ['./editor-starter.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: TUI_EDITOR_EXTENSIONS,
            useValue: defaultEditorExtensions,
        },
    ],
})
export default class TuiEditorStarterPageComponent {
    readonly exampleModule = import('./import/import-module.md?raw');
    readonly exampleHtml = import('./import/insert-template.md?raw');
    readonly exampleComponent = import('./import/component.md?raw');
    readonly exampleEditorOptionsToken = import('./import/editor-options-token.md?raw');
    readonly exampleStyles = import('./import/styles.less.md?raw');
    readonly exampleIcons = import('./import/angular.json.md?raw');

    readonly control = new FormControl(`
        <h2>What is Lorem Ipsum?</h2>
        <p>
            <a
                href="https://www.google.com/search?q=wikipedia&sca_esv=563020551&sxsrf=AB5stBhNcprCNZotMYrhf_8rPUA7JwZ4XQ%3A1693989718615&ei=Vjv4ZKGaJaPMwPAPx5m68Ag&ved=0ahUKEwihnbm7y5WBAxUjJhAIHceMDo4Q4dUDCBA&uact=5&oq=wikipedia&gs_lp=Egxnd3Mtd2l6LXNlcnAiCXdpa2lwZWRpYTIKEAAYigUYsQMYQzIKEAAYgAQYFBiHAjIHEAAYigUYQzILEAAYgAQYsQMYgwEyBxAAGIoFGEMyBxAAGIoFGEMyCBAAGIAEGLEDMgcQABiKBRhDMgUQABiABDIFEAAYgARIqDZQAFjRMXAAeAGQAQCYAYEBoAG4B6oBAzMuNrgBA8gBAPgBAcICBxAjGIoFGCfCAhEQLhiABBixAxiDARjHARjRA8ICCxAuGIAEGLEDGIMBwgINEAAYigUYsQMYgwEYQ8ICExAuGIoFGLEDGIMBGMcBGNEDGEPCAgoQLhiKBRjUAhhDwgINEAAYgAQYsQMYgwEYCsICDRAuGIoFGMcBGNEDGEPiAwQYACBBiAYB&sclient=gws-wiz-serp"
            >
                Lorem Ipsum
            </a>
            is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
            text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
            book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially
            unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and
            more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
    `);

    exampleText = '';
    minHeight: number | null = null;
    maxHeight: number | null = null;
    readOnly = false;
    focusable = true;
    pseudoInvalid: boolean | null = null;
    pseudoFocused: boolean | null = null;
    pseudoHovered: boolean | null = null;

    readonly toolsVariants: readonly TuiEditorTool[][] = [
        defaultEditorTools,
        [
            TuiEditorTool.Bold,
            TuiEditorTool.Italic,
            TuiEditorTool.Strikethrough,
            TuiEditorTool.HR,
        ],
    ];

    tools = this.toolsVariants[0];

    constructor(@Inject(TUI_IS_E2E) readonly isE2E: boolean) {}

    get disabled(): boolean {
        return this.control.disabled;
    }

    set disabled(value: boolean) {
        if (value) {
            this.control.disable();
        } else {
            this.control.enable();
        }
    }
}
