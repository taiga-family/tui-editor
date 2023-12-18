(self.webpackChunkeditor_demo=self.webpackChunkeditor_demo||[]).push([[1023],{91023:e=>{e.exports="import {\n    ChangeDetectionStrategy,\n    Component,\n    Inject,\n    TemplateRef,\n    ViewChild,\n} from '@angular/core';\nimport {TuiPreviewDialogService} from '@taiga-ui/addon-preview';\nimport {TuiDialogContext} from '@taiga-ui/core';\n\n@Component({\n    selector: 'image-preview-example',\n    templateUrl: './image-preview.template.html',\n    styleUrls: ['./image-preview.style.less'],\n    changeDetection: ChangeDetectionStrategy.OnPush,\n})\nexport class ImagePreviewExampleComponent {\n    @ViewChild('previewImages')\n    template?: TemplateRef<TuiDialogContext>;\n\n    image?: HTMLImageElement;\n\n    constructor(\n        @Inject(TuiPreviewDialogService)\n        private readonly dialogs: TuiPreviewDialogService,\n    ) {}\n\n    showImage(image: HTMLImageElement): void {\n        this.image = image;\n        this.dialogs.open(this.template || '').subscribe();\n    }\n}\n"}}]);