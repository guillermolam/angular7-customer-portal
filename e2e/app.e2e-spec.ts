import { AppPage } from './app.po';
import { browser, by, element, protractor } from 'protractor';

describe('mapfrepoc App', () => {
  let page: AppPage;
  let baseUrl = 'http://localhost:4200/';

  beforeEach(() => {
  	var origFn = browser.driver.controlFlow().execute;
  	browser.driver.controlFlow().execute = function () {
  	var args = arguments;
  	// queue 100ms wait
  	origFn.call(browser.driver.controlFlow(), function () {
  		return protractor.promise.delayed(10);   // here we can adjust the execution speed
  	});
  		return origFn.apply(browser.driver.controlFlow(), args);
  	};


    page = new AppPage();
  });

  it('should be on login page', () => {
    page.navigateTo();
    expect(browser.getCurrentUrl()).toBe(baseUrl + 'login'); 
  });

  it('Still Button disabled by invalid email and password', () => {
  	page.addEmail('test@gmail@in.com');
    page.addPassword('123456');
    expect(page.isEnabled()).toBe(false);
  });

  it('Button enabled by valid email and password', () => {
  	page.addEmail('test@northout.com');
  	page.addPassword('123456');
    expect(page.isEnabled()).toBe(true);
	  // page.login();


  	// expect(browser.getCurrentUrl()).toBe(baseUrl + 'home');
  	page.browserWait();
  });
});
