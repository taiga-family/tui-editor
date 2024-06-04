(self.webpackChunkeditor_demo=self.webpackChunkeditor_demo||[]).push([[1023],{91023:e=>{e.exports="import {NgIf} from '@angular/common';\nimport type {TemplateRef} from '@angular/core';\nimport {ChangeDetectionStrategy, Component, inject, ViewChild} from '@angular/core';\nimport type {TuiDialogContext} from '@taiga-ui/core';\nimport {TuiButtonDirective} from '@taiga-ui/core';\nimport {TuiPreview, TuiPreviewDialogService} from '@taiga-ui/kit';\n\n@Component({\n    standalone: true,\n    selector: 'image-preview-example',\n    imports: [TuiPreview, TuiButtonDirective, NgIf],\n    templateUrl: './image-preview.template.html',\n    styleUrls: ['./image-preview.style.less'],\n    changeDetection: ChangeDetectionStrategy.OnPush,\n})\nexport class ImagePreviewExampleComponent {\n    private readonly dialogs = inject(TuiPreviewDialogService);\n\n    @ViewChild('previewImages')\n    protected template?: TemplateRef<TuiDialogContext>;\n\n    protected image?: HTMLImageElement;\n\n    public showImage(image: HTMLImageElement): void {\n        this.image = image;\n        this.dialogs.open(this.template || '').subscribe();\n    }\n}\n"}}]);