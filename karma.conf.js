// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular-devkit/build-angular/plugins/karma'),
      require('@angular/cli/plugins/karma'),
      require('karma-junit-reporter')
    ],
    client:{
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
      reports: [ 'html',  'lcov', 'cobertura' ],
      fixWebpackSourcePaths: true
    },
    angularCli: {
      environment: 'dev'
    },
    browsers: ['Chromium_no_sandbox','Chrome'],
    customLaunchers: {
       "Chromium_no_sandbox": {
         base: 'Chromium',
         flags: [
           '--no-sandbox',
           '--headless',
           '--disable-gpu',
           '--remote-debugging-port=9222'
         ]
       }
     }, 
    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    singleRun: false
  });
};
