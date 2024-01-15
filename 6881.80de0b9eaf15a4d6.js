(self.webpackChunkeditor_demo=self.webpackChunkeditor_demo||[]).push([[6881],{66881:e=>{e.exports=JSON.parse('{"name":"@taiga-ui/components","version":"3.59.0","description":"Taiga UI by Tinkoff is a set of components, services, directives and other tools to build high quality UI using modern Angular framework","keywords":["angular","kit","ui","component-library","component","service","directive"],"homepage":"https://github.com/taiga-family/taiga-ui","repository":"https://github.com/taiga-family/taiga-ui","license":"Apache-2.0","maintainers":["Alex Inkin <alexander@inkin.ru>","Roman Sedov <79601794011@ya.ru>","Maksim Ivanov <splincodewd@yandex.ru>","Vladimir Potekhin <vladimir.potekh@gmail.com>","Nikita Barsukov <nikita.s.barsukov@gmail.com>"],"workspaces":["projects/*"],"scripts":{"postinstall":"npx husky install","start":"nx serve demo","start:fast":"nx serve demo -c fast","start:default":"nx serve demo -c def","start:coalescing":"nx serve demo -c coalescing","start:shadow":"nx serve demo -c shadow","start:host":"nx serve demo --open --host 0.0.0.0 --disable-host-check","build:ssr":"nx build demo && nx run demo:server:production","prerender":"nx run demo:prerender","test":"nx run-many --target test --all --output-style=stream --parallel=1","test:e2e":"nx e2e-ui demo-cypress","*** Workflow ***":"","stylelint":"stylelint \'**/*.{less,css}\' --config package.json","lint":"eslint .","cspell":"cspell --relative --dot --gitignore .","prettier":"prettier !package-lock.json . --ignore-path .gitignore","typecheck":"tsc --noEmit --strict --incremental false --tsBuildInfoFile null --project tsconfig.json","*** Build **":"","build:demo":"nx build demo","build:demo:next":"nx build demo -c next","*** Release ***":"","release":"standard-version -a --no-verify","release:patch":"ts-node ./scripts/release.ts --release-as patch","release:minor":"ts-node ./scripts/release.ts --release-as minor","release:major":"ts-node ./scripts/release.ts --release-as major","*** CI ***":"","affected:test:libs":"nx affected --target test --exclude=demo --output-style=stream","affected:build:libs":"nx affected --target build --exclude=demo --output-style=stream","run-many:build:libs":"nx run-many --target build --all --exclude=demo --output-style=stream","run-many:publish:libs":"nx run-many --target publish --all --output-style=stream"},"commitlint":{"extends":["@taiga-ui/commitlint-config"]},"lint-staged":{"*.less":["stylelint --fix"],"*.{js,ts,html}":["eslint --fix","prettier --write"],"*.{svg,yml,md,less,json}":["prettier --write"]},"browserslist":["extends @taiga-ui/browserslist-config"],"prettier":"@taiga-ui/prettier-config","eslintConfig":{"extends":["plugin:@taiga-ui/experience/all","plugin:@taiga-ui/experience/taiga-naming"],"root":true},"stylelint":{"extends":["@taiga-ui/stylelint-config"],"rules":{"selector-class-pattern":"^(_.*)|(t-.*)|(tui-.*)|(ng-.*)|(hljs.*)$"},"ignoreFiles":["**/demo/**","**/dist/**","**/coverage/**","**/node_modules/**"]},"dependencies":{"@angular/animations":"15.2.10","@angular/cdk":"15.2.9","@angular/common":"15.2.10","@angular/compiler":"15.2.10","@angular/core":"15.2.10","@angular/forms":"15.2.10","@angular/localize":"15.2.10","@angular/platform-browser":"15.2.10","@angular/platform-browser-dynamic":"15.2.10","@angular/platform-server":"15.2.10","@angular/router":"15.2.10","core-js":"2.6.12","parse5":"6.0.1","rxjs":"7.5.0","zone.js":"0.12.0"},"devDependencies":{"@angular-builders/custom-webpack":"15.0.0","@angular-devkit/build-angular":"15.2.10","@angular-devkit/core":"15.2.10","@angular/cli":"15.2.10","@angular/compiler-cli":"15.2.10","@angular/language-service":"15.2.10","@commitlint/cli":"18.4.4","@cypress/webpack-batteries-included-preprocessor":"3.0.2","@cypress/webpack-preprocessor":"6.0.1","@nx/angular":"17.2.8","@nx/jest":"17.2.8","@nx/node":"17.2.8","@nx/workspace":"17.2.8","@playwright/test":"1.40.1","@taiga-ui/browserslist-config":"0.4.0","@taiga-ui/commitlint-config":"0.5.1","@taiga-ui/cspell-config":"0.27.0","@taiga-ui/eslint-plugin-experience":"0.46.5","@taiga-ui/prettier-config":"0.7.0","@taiga-ui/stylelint-config":"0.12.5","@taiga-ui/tsconfig":"0.12.0","@testing-library/cypress":"10.0.1","@tinkoff/ng-event-plugins":"3.1.0","@tinkoff/tui-editor":"1.11.0","@types/glob":"8.1.0","@types/node":"20.11.0","@types/parse5":"6.0.3","@types/webpack-env":"1.18.4","angular-http-server":"1.12.0","babel-loader":"9.1.3","cpy-cli":"5.0.0","cspell":"8.3.2","cypress":"13.6.2","cypress-real-events":"1.11.0","eslint":"8.56.0","find-in-files":"0.5.0","http-server":"14.1.1","husky":"8.0.3","kill-port":"2.0.1","lint-staged":"15.2.0","ng-packagr":"15.2.2","nx":"17.2.8","prettier":"3.1.1","rollup":"4.9.4","standard-version":"9.5.0","stylelint":"16.1.0","ts-loader":"9.5.1","ts-mockito":"2.6.1","ts-node":"10.9.2","typescript":"4.9.5","wait-on":"7.2.0","webpack":"5.89.0"},"engines":{"node":">= 16.14","npm":">= 8.3","yarn":"Please use npm instead of yarn to install dependencies"},"authors":["Alex Inkin <alexander@inkin.ru>","Roman Sedov <79601794011@ya.ru>"],"overrides":{"highlight.js":"11.5.1","webpack":"$webpack","babel-loader":"$babel-loader"},"standard-version":{"scripts":{"postchangelog":"ts-node ./scripts/postchangelog.ts","postbump":"ts-node ./scripts/postbump.ts"},"types":[{"type":"feat","section":"Features"},{"type":"fix","section":"Bug Fixes"},{"type":"deprecate","section":"Deprecations"}]}}')}}]);