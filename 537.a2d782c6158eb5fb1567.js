(self.webpackChunktui_editor=self.webpackChunktui_editor||[]).push([[537],{30537:t=>{t.exports='<tui-data-list (mouseleave.capture)="$event.stopPropagation()">\n    <button\n        *ngFor="let item of getFilteredItems(items, mentionSuggestions); let i = index"\n        tuiOption\n        [tuiAutoFocus]="i == 0"\n        (click)="setMention.emit(item)"\n        (keydown.enter)="setMention.emit(item)"\n    >\n        {{ item.name }}\n        <tui-avatar\n            size="s"\n            [src]="item.avatar || (item.name | tuiInitials)"\n        ></tui-avatar>\n    </button>\n</tui-data-list>\n'}}]);