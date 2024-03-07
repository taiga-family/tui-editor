(self.webpackChunkeditor_demo=self.webpackChunkeditor_demo||[]).push([[3878],{63878:e=>{e.exports="import {ChangeDetectionStrategy, Component, inject, Injector} from '@angular/core';\nimport {FormControl, ReactiveFormsModule, Validators} from '@angular/forms';\nimport type {SafeHtml} from '@angular/platform-browser';\nimport {DomSanitizer} from '@angular/platform-browser';\nimport {TUI_IS_E2E, TuiItemModule, tuiPure} from '@taiga-ui/cdk';\nimport {TuiSvgModule} from '@taiga-ui/core';\nimport {\n    TUI_EDITOR_EXTENSIONS,\n    TuiEditorComponent,\n    TuiEditorTool,\n} from '@tinkoff/tui-editor';\n\nimport {ExampleTuiEmbedToolComponent} from './embed-tool/embed-tool.component';\n\n@Component({\n    standalone: true,\n    selector: 'tui-editor-embed-iframe-example-1',\n    imports: [\n        ExampleTuiEmbedToolComponent,\n        TuiSvgModule,\n        ReactiveFormsModule,\n        TuiItemModule,\n        TuiEditorComponent,\n    ],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection: ChangeDetectionStrategy.OnPush,\n    providers: [\n        {\n            provide: TUI_EDITOR_EXTENSIONS,\n            deps: [Injector],\n            useFactory: (injector: Injector) => [\n                import('@tinkoff/tui-editor').then(({TuiStarterKit}) => TuiStarterKit),\n                import('@tinkoff/tui-editor').then(({tuiCreateImageEditorExtension}) =>\n                    tuiCreateImageEditorExtension({injector}),\n                ),\n            ],\n        },\n    ],\n})\nexport class TuiEditorEmbedIframeExample1 {\n    private readonly sanitizer = inject(DomSanitizer);\n    private readonly isE2E = inject(TUI_IS_E2E);\n\n    protected readonly builtInTools = [TuiEditorTool.Undo];\n\n    protected readonly control = new FormControl(\n        `\n        <p>Here is an online IDE:</p>\n        <iframe\n         src=\"https://codepen.io/mehdinajafi/embed/LYyqNqR?default-tab=html${\n             this.isE2E ? '' : '%2Cresult'\n         }&editable=true\"\n         height=\"375\"\n         width=\"100%\"\n         scrolling=\"no\"\n         frameborder=\"no\"\n         loading=\"lazy\"\n         allowtransparency=\"true\"\n         data-type=\"iframe-editor\"\n         allowfullscreen=\"true\">\n        </iframe>\n        </iframe>\n        <p>Here is a media player:</p>\n        <iframe\n            src=\"https://bandcamp.com/EmbeddedPlayer/album=2219061201/size=small/bgcol=ffffff/linkcol=63b2cc/transparent=true/\"\n            height=\"42\"\n            width=\"100%\"\n            data-type=\"iframe-editor\">\n        </iframe>\n        <p></p>\n    `,\n        Validators.required,\n    );\n\n    @tuiPure\n    protected safe(content: string | null): SafeHtml {\n        return this.sanitizer.bypassSecurityTrustHtml(content ?? '');\n    }\n}\n"}}]);