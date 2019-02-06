# MAPFRE CUSTOMER PORTAL

## Table of contents
* [Components](#markdown-header-components)
* [Helpers](#markdown-header-helpers)
* [Commands](#markdown-header-commands)
* [Dev Env](#markdown-header-dev-env)
* [Packages](#markdown-header-packages)
* [Errors that may happen in install](#markdown-header-error-that-may-happen-in-install)
* [Angular Default Readme](#markdown-header-angular-default-readme)

---

## Components

Temporary "documentation" for all of the components [Components on Trello](https://trello.com/b/entNM8FY/component-creation). This should hopefully be fully realized in the future.

### Dynamic Forms

Standard information https://angular.io/guide/dynamic-form

### Mapfre Design Libray

**Developers repo** https://bitbucket.org/mapfre-usa-b2c/design-system-development-suite/src/master/
What you should be using for update. Please check out the readme for more information.

**Build Repo** https://bitbucket.org/mapfre-usa-b2c/design-library/src/master/

---

## Helpers

### Pipes

These pipes are for the html templates and will are best practise 

Prebaked Pipes in Angular
https://angular.io/api?type=pipe

#### Custom Pipes

**Location** `customer-portal/src/app/_helpers/_pipes`
* Full state to Abbreviation
* State Abbreviation to Full Name
* Custom date format
  * Dates turn into 10.31.2018 
* Apartment Pipe


### Test Data

These should replicate what you will get in your VM. If you are having trouble connecting you can use this data. 
**It shouldn't be used when you are pull requesting to the main project**

**Location** `customer-portal/src/app/_helpers/testing-data.service.ts`

Sass Style guide. https://docs.google.com/document/d/1tzs0FKY-V2DQD31IB8RBwMNsrDzqxM6DXt0h2XdEb64/edit?usp=sharing

Please remember to download TSlint and use the JSON at the end of the file.

**How to Implement**

`import { TestingDataService } from './_helpers/testing-data.service';` *How for you have to dig may vary*

*Within you class constructor*


`constructor(private testingData: TestingDataService) {}`

**In ngInit**

```
// PolicyData
this.policyDataService.updatePolicyDetails( this.testingData.testDatafunction() );

// UserData
let ui = {
  userDetails: this.testingData.testUserInfo(),
  bankAccountDetails: this.testingData.testBankingInfo()
};
this.userService.updateUser( ui );

// Claims List
this.claimsDataService.updateClaims('list', this.testingData.testDataClaims('list'));

// Claims Details
this.claimsDataService.updateClaims('details', this.testingData.testDataClaims('details'));
```

These can be used in the error section of the subscriptions. For example:

```
this.authenticationService
.getUserDetailsByEmail(email)
.subscribe((success) => { },
(err) => {
  let ui = {
    userDetails: this.testingData.testUserInfo(),
    bankAccountDetails: this.testingData.testBankingInfo()
  };
  this.policyDataService.updatePolicyDetails( this.testingData.testDatafunction() );
  this.userService.updateUser( ui );
  this.claimsDataService.updateClaims('list', this.testingData.testDataClaims('list'));
  this.claimsDataService.updateClaims('details', this.testingData.testDataClaims('details'));
  this.userService.$user.subscribe((t) => { this.testAlert = t.testData; });
});
```

---

## Commands

Here are some command line helpers, for serving, building, etc.

**How to run these commands** `npm run *command here*`

| Command   	| What it does  	|
|---	|---	|
|start   	| ng serve  	|
|build-dev   	| ng build --configuration=dev  	|
|build   	| ng build --configuration=production  	|
|test   	| ng test --watch=false --browsers Chrome  	|
|cibuild_test   	|  ng test --code-coverage --watch=false --browsers Chromium_no_sandbox 	|
|lint   	| ng lint  	|
|e2e   	| ng e2e  	|
|cibuild   	| ng test --code-coverage && ng build --configuration=dev --no-progress  	|
|sonar-run   	| sonar-scanner -D sonar.host.url=http://mdv-docdevl01:9000  	|
|proxy   	| ng serve --proxy-config proxy.config.json  	|
|lighthouse:ci   	| "node_modules/lighthouse/lighthouse-cli/index.js 'http://mdv-doctest/login--output-path=./lighthouse-report.html --quiet --chrome-flags='--headless --no-sandbox --disable-gpu' **This will change** 	|
|prepush   	| git pull && git pull local_pull master && npm run build && npm run test  	|
|pre_e2e   	| node_modules/protractor/node_modules/webdriver-manager/bin/webdriver-manager update --proxy='http://10.169.5.196:8080' --igonre_ssl  	|
|e2e_compile   	| node_modules/typescript/bin/tsc -p e2e/tsconfig.e2e.json  	|
|e2e_run    | node_modules/protractor/bin/protractor e2e/protractor.conf.js   |



---

## Dev Enviroment

### Information for the new forked CP
Forked Customer-Portal
* `git clone https://{ YOUR USERNAME }@bitbucket.org/{ YOUR USERNAME }/customer-portal-forked.git`
> You will need to replace the _{ YOUR USERNAME }_ with your username, naturally.
> This is where you will need to do you development. Once ready for production you will need to do a pull request on the main version

Do you need to merge from the original cusomer portal?
> https://stackoverflow.com/questions/29863772/github-merging-fork-into-master-locally Basically you are creating a new remote, but instead of a URL you are using a local path

**View - You will need to be in your VM** 
* http://mdv-doctest02

### Prepush to forked master and dev build
You will need to make sure that the build and unit tests pass. Easiest way to do that is with the `prepush` command.

---

## Packages
You may find other packages that are dependencies of other packages. All the needed packages are present in the `package.json`

**To Install** npm i

### dependencies
* @agm/core
* @angular/animations
* @angular/common
* @angular/compiler
* @angular/core
* @angular/forms
* @angular/http
* @angular/platform-browser
* @angular/platform-browser-dynamic
* @angular/pwa
* @angular/router
* @angular/service-worker
* @ngx-translate/core
* @types/chart.js
* @types/file-saver
* angular-bootstrap-md
* angular2-cookie
* bootstrap
* chart.js
* chartist
* classlist.js
* core-js
* file-saver
* font-awesome
* hammerjs
* jquery
* jshint
* lodash.isequal
* ngx-cookie-service
* ngx-google-places-autocomplete
* popper.js
* rxjs
* rxjs-compat
* sonarqube-scanner
* tslint-sonarts
* underscore
* zone.js
 
### Dev Dependencies
* @agm/core
* @angular-devkit/build-angular
* @angular/cli
* @angular/compiler-cli
* @angular/language-service
* @auth0/angular-jwt
* @types/chai
* @types/cucumber
* @types/jasmine
* @types/jasminewd2
* @types/mapfre-design-library": "git+https://bitbucket.org/mapfre-usa-b2c/design-library.git"
* @types/node
* chai
* chai-as-promised
* codelyzer
* cucumber
* jasmine-core
* jasmine-spec-reporter
* karma
* karma-chrome-launcher
* karma-cli
* karma-coverage-istanbul-reporter
* karma-jasmine
* karma-jasmine-html-reporter
* karma-junit-reporter
* lighthouse
* mapfre-design-library": "git+https://bitbucket.org/mapfre-usa-b2c/design-library.git"
* protractor
* protractor-cucumber-framework
* ts-node
* tslint
* typescript


---

## Angular Default Readme

### Pre-requisites
You need node.js installed in your local machine

### First time
Run `npm install` to generate "node_modules" folder

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

You can also run`ng serve --ssl true`. Install a CORS plugin for your browser and Navigate to `https://localhost:4200`.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

---

## Problem with AppModule ["ERROR in No NgModule metadata found for 'AppModule'."]
This is typacally a result of having a different node.js or angular-cli version.
Steps to solve this issue are as follows:

In order to update the angular-cli package installed globally in your system, you need to run:

`npm uninstall -g @angular/cli` (Yes, this is mandatory and you need to uninstall and install back again)  
`npm cache clean` or `npm cache verify` (if npm > 5)  
`npm install -g @angular/cli@latest`  
Depending on your system, you may need to prefix the above commands with sudo</br>

Also, most likely you want to also update your local project version, because inside your project directory it will be selected with higher priority than the global one:  

`rm -rf node_modules`  
`npm uninstall --save-dev @angular/cli`  
`npm install --save-dev @angular/cli@latest`  
`npm install`  
On tsconfig.json add this: `"include": ["src/**/*.ts","node_modules/angular-bootstrap-md/**/*.ts" ]`    

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
