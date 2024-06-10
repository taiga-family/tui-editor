(self.webpackChunkeditor_demo=self.webpackChunkeditor_demo||[]).push([[7090],{77090:e=>{e.exports="import {ChangeDetectionStrategy, Component, inject, ViewChild} from '@angular/core';\nimport {FormsModule} from '@angular/forms';\nimport {TuiActiveZoneDirective, TuiAutoFocusDirective} from '@taiga-ui/cdk';\nimport type {TuiHostedDropdownComponent} from '@taiga-ui/core';\nimport {TuiButtonDirective, TuiHostedDropdownModule} from '@taiga-ui/core';\nimport {TuiTiptapEditorService} from '@taiga-ui/editor';\nimport {TuiInputInlineComponent} from '@taiga-ui/kit';\n\n@Component({\n    standalone: true,\n    selector: 'image-tool',\n    imports: [\n        FormsModule,\n        TuiAutoFocusDirective,\n        TuiInputInlineComponent,\n        TuiActiveZoneDirective,\n        TuiHostedDropdownModule,\n        TuiButtonDirective,\n    ],\n    templateUrl: './image-tool.template.html',\n    styleUrls: ['./image-tool.styles.less'],\n    changeDetection: ChangeDetectionStrategy.OnPush,\n})\nexport class ExampleTuiPasteImageTool {\n    @ViewChild('dropdown')\n    private readonly dropdown?: TuiHostedDropdownComponent;\n\n    private readonly editor = inject(TuiTiptapEditorService);\n\n    protected youtubeLogo =\n        'https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg';\n\n    protected placeholder = 'https://image.com/etc.png';\n\n    protected url = '';\n\n    protected insertImage(src: string): void {\n        if (!src) {\n            return;\n        }\n\n        this.editor.setImage(src);\n        this.dropdown?.close();\n    }\n}\n"}}]);