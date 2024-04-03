(self.webpackChunkeditor_demo=self.webpackChunkeditor_demo||[]).push([[8760],{48760:e=>{e.exports="import {NgForOf} from '@angular/common';\nimport {ChangeDetectionStrategy, Component, inject} from '@angular/core';\nimport {TuiActiveZoneDirective} from '@taiga-ui/cdk';\nimport {TuiButtonDirective, TuiHostedDropdownModule} from '@taiga-ui/core';\nimport {TuiTiptapEditorService} from '@tinkoff/tui-editor';\n\n@Component({\n    standalone: true,\n    selector: 'smiles-tool',\n    imports: [\n        TuiActiveZoneDirective,\n        NgForOf,\n        TuiHostedDropdownModule,\n        TuiButtonDirective,\n    ],\n    templateUrl: './smiles-tool.template.html',\n    styleUrls: ['./smiles-tool.styles.less'],\n    changeDetection: ChangeDetectionStrategy.OnPush,\n})\nexport class ExampleTuiSmilesToolComponent {\n    private readonly editor = inject(TuiTiptapEditorService);\n\n    /* More smiles: https://www.w3schools.com/charsets/ref_emoji.asp */\n    protected readonly smiles = [\n        '&#129409;',\n        '&#9200;',\n        '&#9749;',\n        '&#9989;',\n        '&#10060;',\n        '&#10071;',\n        '&#10133;',\n        '&#128064;',\n        '&#128070;',\n        '&#128076;',\n        '&#128522;',\n        '&#128640;',\n    ];\n\n    protected insertSmile(smile: string): void {\n        this.editor\n            .getOriginTiptapEditor()\n            .chain()\n            .focus()\n            .insertContent(`<p data-type=\"emoji\">${smile}</p>`)\n            .insertContent(' ')\n            .run();\n    }\n}\n"}}]);