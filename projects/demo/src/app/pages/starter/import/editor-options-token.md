```ts
import {tuiEditorOptionsProvider, TuiEditorOptions} from '@tinkoff/tui-editor';

const CUSTOM_EDITOR_OPTIONS: Partial<TuiEditorOptions> = {
  colors: new Map([
    ['red', 'rgba(244, 87, 37, 1)'],
    ['blue', 'var(--tui-primary)'],
  ]),
  //...
};

@Component({
  standalone: true,
  //...
  providers: [
    // ..
    tuiEditorOptionsProvider(CUSTOM_EDITOR_OPTIONS),
  ],
})
export class YourComponent {}
```
