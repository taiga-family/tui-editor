(self.webpackChunkeditor_demo=self.webpackChunkeditor_demo||[]).push([[5501],{5501:o=>{o.exports="import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';\nimport {FormControl, ReactiveFormsModule, Validators} from '@angular/forms';\nimport {DomSanitizer, SafeHtml} from '@angular/platform-browser';\nimport {TuiItemModule, tuiPure} from '@taiga-ui/cdk';\nimport {TuiSvgModule} from '@taiga-ui/core';\nimport {\n    TUI_EDITOR_EXTENSIONS,\n    TuiEditorComponent,\n    TuiEditorTool,\n} from '@tinkoff/tui-editor';\n\nimport {ExampleTuiYoutubeToolComponent} from './youtube-tool/youtube-tool.component';\n\n@Component({\n    standalone: true,\n    selector: 'tui-editor-embed-youtube-example-1',\n    imports: [\n        TuiSvgModule,\n        ExampleTuiYoutubeToolComponent,\n        ReactiveFormsModule,\n        TuiItemModule,\n        TuiEditorComponent,\n    ],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection: ChangeDetectionStrategy.OnPush,\n    providers: [\n        {\n            provide: TUI_EDITOR_EXTENSIONS,\n            useValue: [\n                import('@tinkoff/tui-editor').then(({TuiStarterKit}) => TuiStarterKit),\n                import('@tinkoff/tui-editor').then(({TuiYoutube}) => TuiYoutube),\n            ],\n        },\n    ],\n})\nexport class TuiEditorEmbedYoutubeExample1 {\n    readonly builtInTools = [TuiEditorTool.Undo];\n    readonly control = new FormControl(\n        `\n        <p>Editor now supports YouTube embeds!</p>\n        <div data-youtube-video>\n            <iframe width=\"100%\" src=\"https://www.youtube.com/watch?v=KdO8CFCXQu0\"></iframe>\n        </div>\n        <p>Try adding your own video to this editor!</p>\n    `,\n        Validators.required,\n    );\n\n    constructor(@Inject(DomSanitizer) private readonly sanitizer: DomSanitizer) {}\n\n    /**\n     * TUI_SANITIZER doesn't support iframe inside content\n     */\n    @tuiPure\n    safe(content: string | null): SafeHtml {\n        return this.sanitizer.bypassSecurityTrustHtml(content ?? '');\n    }\n}\n"}}]);