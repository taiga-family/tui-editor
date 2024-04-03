(self.webpackChunkeditor_demo=self.webpackChunkeditor_demo||[]).push([[6014],{76014:e=>{e.exports="import {ChangeDetectionStrategy, Component, inject, ViewChild} from '@angular/core';\nimport {FormsModule} from '@angular/forms';\nimport {TuiActiveZoneDirective, TuiAutoFocusDirective} from '@taiga-ui/cdk';\nimport type {TuiHostedDropdownComponent} from '@taiga-ui/core';\nimport {TuiButtonDirective, TuiHostedDropdownModule} from '@taiga-ui/core';\nimport {TuiInputInlineModule} from '@taiga-ui/kit';\nimport {TuiTiptapEditorService} from '@tinkoff/tui-editor';\n\n@Component({\n    standalone: true,\n    selector: 'youtube-tool',\n    imports: [\n        TuiInputInlineModule,\n        TuiAutoFocusDirective,\n        FormsModule,\n        TuiActiveZoneDirective,\n        TuiHostedDropdownModule,\n        TuiButtonDirective,\n    ],\n    templateUrl: './youtube-tool.template.html',\n    styleUrls: ['./youtube-tool.styles.less'],\n    changeDetection: ChangeDetectionStrategy.OnPush,\n})\nexport class ExampleTuiYoutubeToolComponent {\n    @ViewChild('dropdown')\n    private readonly dropdown?: TuiHostedDropdownComponent;\n\n    private readonly editor = inject(TuiTiptapEditorService);\n\n    protected youtubeLogo = 'https://cdn.worldvectorlogo.com/logos/play-icon.svg';\n    protected placeholder = 'https://www.youtube.com/embed/abc..';\n    protected url = '';\n\n    protected insertYoutubeVideo(src: string): void {\n        if (src) {\n            const prevLine = this.editor.state.selection.anchor;\n\n            // @note: don't use `setHardBreak`,\n            // it inherits styles of previous lines\n            // required two line after\n            // this.editor.enter();\n            this.editor.enter();\n            this.editor.setTextSelection(prevLine);\n            this.editor.setYoutubeVideo({src, width: '100%'});\n\n            this.url = '';\n            this.dropdown?.close();\n        }\n    }\n}\n"}}]);