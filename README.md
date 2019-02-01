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

## Dev Enviroment

**Information for the new forked CP**
Forked Customer-Portal
> `git clone https://{ YOUR USERNAME }@bitbucket.org/{ YOUR USERNAME }/customer-portal-forked.git`
You will need to replace the _{ YOUR USERNAME }_ with your username, naturally.
This is where you will need to do you development. Once ready for production you will need to do a pull request on the main version

Do you need to merge from the original cusomer portal?
> https://stackoverflow.com/questions/29863772/github-merging-fork-into-master-locally Basically you are creating a new remote, but instead of a URL you are using a local path

**View**
> http://mdv-doctest02

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
