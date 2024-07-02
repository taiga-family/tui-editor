(self.webpackChunktui_editor=self.webpackChunktui_editor||[]).push([[3243],{63243:n=>{n.exports='# angular.json\n\n```json\n{\n  "$schema": "./node_modules/@angular/cli/lib/config/schema.json",\n  "version": 1,\n  "newProjectRoot": "projects",\n  "projects": {\n    "demo": {\n      "root": "",\n      "sourceRoot": "",\n      "projectType": "application",\n      "prefix": "my-app",\n      "architect": {\n        "build": {\n          "builder": "@angular-devkit/build-angular:application",\n          "options": {\n            "outputPath": "dist/demo",\n            "index": "src/index.html",\n            "main": "src/main.ts",\n            "tsConfig": "src/tsconfig.app.json",\n            "assets": ["src/favicon.ico", "src/assets"],\n            "styles": ["src/styles.less"]\n          },\n          "configurations": {\n            "production": {\n              "fileReplacements": [\n                {\n                  "replace": "src/environments/environment.ts",\n                  "with": "src/environments/environment.prod.ts"\n                }\n              ],\n              "optimization": false,\n              "outputHashing": "all",\n              "sourceMap": true,\n              "extractCss": true,\n              "namedChunks": false,\n              "aot": true,\n              "extractLicenses": false,\n              "vendorChunk": false,\n              "buildOptimizer": false\n            }\n          }\n        },\n        "serve": {\n          "builder": "@angular-devkit/build-angular:dev-server",\n          "options": {\n            "browserTarget": "demo:build"\n          }\n        }\n      }\n    }\n  },\n  "defaultProject": "demo"\n}\n```\n\n# tsconfig.json\n\n```json\n{\n  "compilerOptions": {\n    "sourceMap": false,\n    "declaration": false,\n    "downlevelIteration": false,\n    "experimentalDecorators": true,\n    "useDefineForClassFields": false,\n    "module": "esnext",\n    "target": "es2022",\n    "moduleResolution": "node",\n    "importHelpers": true,\n    "lib": ["esnext", "dom"]\n  }\n}\n```\n'}}]);