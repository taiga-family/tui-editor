import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {TuiDestroyService} from '@taiga-ui/cdk';
import {
    TUI_EDITOR_EXTENSIONS,
    TuiEditorComponent,
    TuiEditorSocketComponent,
    TuiEditorTool,
} from '@tinkoff/tui-editor';

@Component({
    standalone: true,
    imports: [ReactiveFormsModule, TuiEditorComponent, TuiEditorSocketComponent],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        TuiDestroyService,
        {
            provide: TUI_EDITOR_EXTENSIONS,
            useValue: [
                import('@tinkoff/tui-editor').then(({TuiStarterKit}) => TuiStarterKit),
                import('@tinkoff/tui-editor').then(({tuiCreateGroupExtension}) =>
                    tuiCreateGroupExtension({
                        nested: false,
                        draggable: false,
                        createOnEnter: true,
                        // @note: you can override css styles with your own classes
                        groupNodeClass: 'filled-group',
                        groupPointerNodeClass: '', // anyway element doesn't exists if `draggable` is false
                    }),
                ),
                import('@tiptap/extension-text-style').then(({TextStyle}) => TextStyle),
                import('@tinkoff/tui-editor').then(
                    ({TuiBackgroundColor}) => TuiBackgroundColor,
                ),
            ],
        },
    ],
})
export default class ExampleComponent {
    protected readonly builtInTools = [
        TuiEditorTool.Undo,
        TuiEditorTool.Group,
        TuiEditorTool.Hilite,
    ];

    protected control = new FormControl('');

    constructor() {
        this.control.patchValue(
            '<div data-type="group" style="background-color: blue"><p>This is a boring paragraph.</p></div><div data-type="group"><p>And another paragraph.</p></div><div data-type="group" style="background-color: green"><p>Let’s finish with a boring paragraph.</p></div>',
        );
    }
}
