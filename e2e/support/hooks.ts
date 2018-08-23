//Before and after step/feature/method perform some operation are set here.

const { BeforeAll, Before, After, AfterAll, Status } = require("cucumber");

import * as fs from "fs";
import { browser } from "protractor";
import { config } from "../config/config";

//before all url enter in the browser.
BeforeAll({timeout: 100 * 1000}, async () => {
  await browser.get(config.url['dev']);
});

Before(async function(scenario){
  if(!fs.existsSync("failed_screenshot")){
    fs.mkdir("failed_screenshot",  function(err){
        if(err){
            console.log(err);
            // echo the result back
            console.log("ERROR! Can't make the directory! \n");
        }
    });
  };
});

//Afrter scenario take the screenshot when it gets failed.
After(async function(scenario){	
	var today = new Date();
	var current_date_time= today.getMonth()+"_"+today.getDate()+"_"+today.getFullYear()+"_"+today.getHours()+"_"+today.getMinutes()+"_"+today.getSeconds();
    browser.driver.getCapabilities().then(function(caps){
    	browser.browserName = caps.get('browserName');
	});

  if (scenario.result.status === Status.FAILED) {
   		browser.takeScreenshot().then(function (png) {
            var stream = fs.createWriteStream('failed_screenshot/'+browser.browserName+' '+scenario.pickle.name+" "+current_date_time+'.png');
            stream.write(new Buffer(png, 'base64'));
            stream.end();
    })
  }
});

//After all execution close the browser.
AfterAll({timeout: 100 * 1000}, async () => {
   await browser.quit();
});
