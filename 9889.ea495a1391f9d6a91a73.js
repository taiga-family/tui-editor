(self.webpackChunktui_editor=self.webpackChunktui_editor||[]).push([[9889],{9889:n=>{n.exports="import {\n    ChangeDetectionStrategy,\n    Component,\n    Inject,\n    Injector,\n    ViewChild,\n} from '@angular/core';\nimport {FormControl, Validators} from '@angular/forms';\nimport {DomSanitizer, SafeHtml} from '@angular/platform-browser';\nimport {TUI_IS_E2E, tuiPure, tuiTypedFromEvent} from '@taiga-ui/cdk';\nimport {\n    TUI_ATTACH_FILES_LOADER,\n    TUI_ATTACH_FILES_OPTIONS,\n    TUI_EDITOR_EXTENSIONS,\n    TuiEditorAttachedFile,\n    TuiEditorComponent,\n    TuiEditorTool,\n} from '@tinkoff/tui-editor';\nimport {Observable} from 'rxjs';\nimport {map} from 'rxjs/operators';\n\n@Component({\n    selector: 'tui-editor-embed-html5-example-1',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection: ChangeDetectionStrategy.OnPush,\n    providers: [\n        {\n            provide: TUI_EDITOR_EXTENSIONS,\n            deps: [Injector],\n            useFactory: (_injector: Injector) => [\n                import('@tinkoff/tui-editor/extensions/starter-kit').then(\n                    ({StarterKit}) => StarterKit,\n                ),\n                import('@tiptap/extension-text-style').then(({TextStyle}) => TextStyle),\n                import('@tinkoff/tui-editor/extensions/link').then(\n                    ({TuiLink}) => TuiLink,\n                ),\n                import('@tinkoff/tui-editor/extensions/jump-anchor').then(\n                    ({TuiJumpAnchor}) => TuiJumpAnchor,\n                ),\n                import('@tinkoff/tui-editor/extensions/file-link').then(\n                    ({TuiFileLink}) => TuiFileLink,\n                ),\n                import('@tinkoff/tui-editor/extensions/media').then(\n                    ({TuiVideo}) => TuiVideo,\n                ),\n                import('@tinkoff/tui-editor/extensions/media').then(\n                    ({TuiAudio}) => TuiAudio,\n                ),\n                import('@tinkoff/tui-editor/extensions/media').then(\n                    ({TuiSource}) => TuiSource,\n                ),\n            ],\n        },\n        {\n            provide: TUI_ATTACH_FILES_LOADER,\n            deps: [],\n            useFactory:\n                () =>\n                ([file]: File[]): Observable<\n                    Array<TuiEditorAttachedFile<{type: string}>>\n                > => {\n                    const fileReader = new FileReader();\n\n                    // For example, instead of uploading to a file server,\n                    // we convert the result immediately into content to base64\n                    fileReader.readAsDataURL(file);\n\n                    return tuiTypedFromEvent(fileReader, 'load').pipe(\n                        map(() => [\n                            {\n                                name: file.name,\n\n                                /* base64 or link to the file on your server */\n                                link: String(fileReader.result),\n\n                                attrs: {\n                                    type: file.type,\n                                },\n                            },\n                        ]),\n                    );\n                },\n        },\n        {\n            provide: TUI_ATTACH_FILES_OPTIONS,\n            useValue: {\n                accept: 'video/mp4,video/x-m4v,video/*,audio/x-m4a,audio/*',\n                multiple: false,\n            },\n        },\n    ],\n    host: {\n        class: 'html5-editor-example',\n        '[class._e2e]': 'isE2E',\n    },\n})\nexport class TuiEditorEmbedHtml5Example1 {\n    @ViewChild(TuiEditorComponent)\n    private readonly wysiwyg?: TuiEditorComponent;\n\n    readonly builtInTools = [\n        TuiEditorTool.Undo,\n        TuiEditorTool.Link,\n        TuiEditorTool.Attach,\n    ];\n\n    readonly control = new FormControl(\n        `\n            <p>Here is video: </p>\n\n            <video controls=\"controls\" width=\"100%\" preload=\"${\n                this.isE2E ? 'none' : 'auto'\n            }\" controlsList=\"nodownload\">\n                <source src=\"https://www.w3schools.com/html/mov_bbb.mp4\" type=\"video/mp4\">\n            </video>\n\n            <p>Here is audio: </p>\n            <audio controls style=\"width: 100%\" preload=\"${\n                this.isE2E ? 'none' : 'auto'\n            }\" controlsList=\"nodownload\">\n              <source src=\"https://www.w3docs.com/build/audios/audio.mp3\" type=\"audio/mp3\">\n            </audio>\n\n            <p></p>\n            `,\n        Validators.required,\n    );\n\n    constructor(\n        @Inject(TUI_IS_E2E) readonly isE2E: boolean,\n        @Inject(DomSanitizer) private readonly sanitizer: DomSanitizer,\n    ) {}\n\n    @tuiPure\n    safe(content: string | null): SafeHtml {\n        return this.sanitizer.bypassSecurityTrustHtml(content ?? '');\n    }\n\n    attach([file]: Array<TuiEditorAttachedFile<{type: string}>>): void {\n        const tag = `${file.attrs?.type ?? ''}`.split('/')[0];\n\n        this.wysiwyg?.editor\n            ?.getOriginTiptapEditor()\n            .commands.insertContent(\n                `<${tag} controls width=\"100%\"><source src=\"${file.link}\" type=\"${file.attrs?.type}\"></${tag}><p><a href=\"${file.link}\" download=\"${file.name}\">Download ${file.name}</a></p>`,\n            );\n    }\n}\n"}}]);