import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';
import {TuiItemModule, tuiPure} from '@taiga-ui/cdk';
import {TuiSvgModule} from '@taiga-ui/core';
import {
    TUI_EDITOR_EXTENSIONS,
    TuiEditorComponent,
    TuiEditorTool,
} from '@tinkoff/tui-editor';

import {ExampleTuiYoutubeToolComponent} from './youtube-tool/youtube-tool.component';

@Component({
    standalone: true,
    selector: 'tui-editor-embed-youtube-example-1',
    imports: [
        TuiSvgModule,
        ExampleTuiYoutubeToolComponent,
        ReactiveFormsModule,
        TuiItemModule,
        TuiEditorComponent,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: TUI_EDITOR_EXTENSIONS,
            useValue: [
                import('@tinkoff/tui-editor').then(({TuiStarterKit}) => TuiStarterKit),
                import('@tinkoff/tui-editor').then(({TuiYoutube}) => TuiYoutube),
            ],
        },
    ],
})
export class TuiEditorEmbedYoutubeExample1 {
    readonly builtInTools = [TuiEditorTool.Undo];
    readonly control = new FormControl(
        `
        <p>Editor now supports YouTube embeds!</p>
        <div data-youtube-video>
            <iframe width="100%" src="https://www.youtube.com/watch?v=KdO8CFCXQu0"></iframe>
        </div>
        <p>Try adding your own video to this editor!</p>
    `,
        Validators.required,
    );

    constructor(@Inject(DomSanitizer) private readonly sanitizer: DomSanitizer) {}

    /**
     * TUI_SANITIZER doesn't support iframe inside content
     */
    @tuiPure
    safe(content: string | null): SafeHtml {
        return this.sanitizer.bypassSecurityTrustHtml(content ?? '');
    }
}
