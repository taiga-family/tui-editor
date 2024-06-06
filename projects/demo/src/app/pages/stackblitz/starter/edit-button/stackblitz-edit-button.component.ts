import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TuiButtonDirective} from '@taiga-ui/core';

@Component({
    standalone: true,
    selector: 'stackblitz-edit-button',
    imports: [TuiButtonDirective],
    template: `
        <button
            appearance="flat"
            icon="assets/icons/stackblitz.svg"
            size="s"
            tuiButton
            type="button"
        >
            Edit
        </button>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StackblitzEditButton {}
