// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    "./features/*.feature"
  ],
  capabilities: {
    'browserName': 'chrome',
  },
  directConnect: false,
  seleniumAddress: 'http://mdv-docdevl01:4444/wd/hub/',
  baseUrl: 'http://mdv-doctest' ,
  framework: 'custom',
  frameworkPath: require.resolve("protractor-cucumber-framework"),
  cucumberOpts: {
    compiler: "ts:ts-node/register",
    require: ["typeScript/stepdefinitions/*.js"],
    strict: true,
    tags: ["@test"],
}
};