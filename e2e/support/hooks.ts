//Before and after step/feature/method perform some operation are set here.

const { BeforeAll, After, AfterAll, Status } = require("cucumber");

import * as fs from "fs";
import { browser } from "protractor";
import { config } from "../config/config";

//before all url enter in the browser.
BeforeAll({timeout: 100 * 1000}, async () => {
    await browser.get(config.baseUrl);
});

//Afrter scenario take the screenshot when it gets failed.
After(async function(scenario) {	
    if (scenario.result.status === Status.FAILED) {
        // screenShot is a base-64 encoded PNG
         const screenShot = await browser.takeScreenshot();
         this.attach(screenShot, "image/png");
    }
});

//After all execution close the browser.
AfterAll({timeout: 100 * 1000}, async () => {
   await browser.quit();
});
