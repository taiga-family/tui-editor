import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MaskitoModule} from '@maskito/angular';
import {
    TuiSvgModule,
    TuiTextfieldControllerModule,
    TuiWrapperModule,
} from '@taiga-ui/core';
import {TuiInputModule} from '@taiga-ui/kit';

@Component({
    standalone: true,
    selector: 'tui-color-picker-example-4',
    imports: [
        TuiSvgModule,
        FormsModule,
        TuiInputModule,
        MaskitoModule,
        TuiTextfieldControllerModule,
        TuiWrapperModule,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiColorPickerExample4 {
    readonly mask = {mask: ['#', ...new Array(6).fill(/[0-9a-f]/i)]};

    value = '#ffdd2d';
}
