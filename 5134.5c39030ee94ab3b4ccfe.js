(self.webpackChunktui_editor=self.webpackChunktui_editor||[]).push([[5134],{15134:t=>{t.exports='<tui-hosted-dropdown\n    tuiDropdownAlign="left"\n    [content]="palette"\n    [tuiDropdownMaxHeight]="999"\n>\n    <button\n        tuiButton\n        type="button"\n        appearance=""\n        automation-id="color-picker__button"\n        [style.background]="color$ | async"\n    >\n        Palette only\n    </button>\n</tui-hosted-dropdown>\n<ng-template #palette>\n    <tui-palette\n        [colors]="colors"\n        (selectedColor)="updateColor($event)"\n    ></tui-palette>\n</ng-template>\n'}}]);