import {AsyncPipe} from '@angular/common';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TuiDocPageModule, TuiMarkdownPipe} from '@taiga-ui/addon-doc';
import type {TuiStringHandler} from '@taiga-ui/cdk';

@Component({
    standalone: true,
    imports: [AsyncPipe, TuiDocPageModule, TuiMarkdownPipe],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ExampleComponent {
    protected readonly changelog = import('../../../../../tui-editor/CHANGELOG.md?raw');

    protected mapper: TuiStringHandler<string> = value =>
        value.replaceAll(
            'All notable changes to this project will be documented in this file. See\n[Conventional Commits](https://conventionalcommits.org) for commit guidelines.',
            '',
        );
}
