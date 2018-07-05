# MAPFRE CUSTOMER PORTAL
[logo]: https://noticias.mapfre.com/wp-content/uploads/2017/01/2542x457-logo-mapfre.jpg "Mapfre Customer"

## Pre-requisites
You need node.js installed in your local machine

## First time
Run `npm install` to generate "node_modules" folder

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

You can also run`ng serve --ssl true`. Install a CORS plugin for your browser and Navigate to `https://localhost:4200`.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Problem with AppModule
This is typacally a result of having a different node.js or angular-cli version.
Steps to solve this issue are as follows:

In order to update the angular-cli package installed globally in your system, you need to run:

`npm uninstall -g angular-cli` (Yes, this is mandatory and you need to uninstall and install back again)
`npm cache clean` or `npm cache verify` (if npm > 5)
`npm install -g @angular/cli@latest`
Depending on your system, you may need to prefix the above commands with sudo.

Also, most likely you want to also update your local project version, because inside your project directory it will be selected with higher priority than the global one:

`rm -rf node_modules`
`npm uninstall --save-dev angular-cli`
`npm install --save-dev @angular/cli@latest`
`npm install`

## Further help
To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).



## Compiler Help
You may need to upgrade your node version in order for this to run properly.
### Commands 
NPM update `npm install -g npm`

Versions of from a successful Compiling
```
Angular CLI: 6.0.8
Node: 8.11.2
OS: darwin x64
Angular: 6.0.6
... animations, common, compiler, compiler-cli, core, forms
... http, language-service, platform-browser
... platform-browser-dynamic, router

Package                           Version
-----------------------------------------------------------
@angular-devkit/architect         0.6.8
@angular-devkit/build-angular     0.6.8
@angular-devkit/build-optimizer   0.6.8
@angular-devkit/core              0.6.8
@angular-devkit/schematics        0.6.8
@angular/cli                      6.0.8
@ngtools/webpack                  6.0.8
@schematics/angular               0.6.8
@schematics/update                0.6.8
rxjs                              6.2.1
typescript                        2.7.2
webpack                           4.8.3

NPM: 5.6.0
```

