/*Configuration file to configure the required packages  */

import * as path from "path";
import { browser, Config } from "protractor";
import { Reporter } from "../support/reporter";

//Path to store reports file on current directory.
const jsonReports = process.cwd() + "/reports/json";

export const config: Config = {
    //Web Driver ip bydefault it should be http://127.0.0.1:4444/wd/hub which will run the all browser dependency.
    seleniumAddress: "http://127.0.0.1:4444/wd/hub",

    SELENIUM_PROMISE_MANAGER: false,
    //Our project url.
    baseUrl: "http://localhost:4200",

    //Multiple browser execution setup to execute current test.
    multiCapabilities: [{
      'browserName': 'firefox'
    }, {
      'browserName': 'chrome'
    }],

    framework: "custom",
    frameworkPath: require.resolve("protractor-cucumber-framework"),

    //Feature file directore to executed during run of cucumber
    specs: [
        "../../features/*.feature","../../features/*.Feature",
    ],

    //Pre-steps to maximize the window.
    onPrepare: () => {
        browser.ignoreSynchronization = true;
        browser.manage().window().maximize();
        Reporter.createDirectory(jsonReports);
    },

    //Cucumber option to report/require files and run according to tag.
    cucumberOpts: {
        compiler: "ts:ts-node/register",
        // format: "json:.tmp/results.json",
        format: "json:./reports/json/cucumber_report.json",
        require: ["../../typeScript/stepdefinitions/*.js", "../../typeScript/support/*.js"],
        strict: true,

        tags: "@CucumberScenario or @ProtractorScenario or @TypeScriptScenario or @OutlineScenario",
    },
    //Protractor Plugin to report generation of execution on html formate
    plugins: [{
        package: 'protractor-multiple-cucumber-html-reporter-plugin',
        options:{
            // read the options part for more options
            automaticallyGenerateReport: true,
            removeExistingJsonReportFile: true
        }
    }],
    
    //On Complete execution of test publish the report in html format.
    onComplete: () => {
        Reporter.createHTMLReport();
    },
};
