import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/login');
  }

/*  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }*/

  getParagraphText() {
    return element(by.css('form p')).getText();
  }

  getEmailErrorText() {
    return element(by.css('form p')).getText();
  }

  addEmail(email: string) {
		element(by.id('email')).clear();
    element(by.id('email')).sendKeys(email);
  }

  addPassword(password: string) {
      element(by.id('password')).clear();
  		element(by.id('password')).sendKeys(password);
  }

  login() {
    return element(by.id('login_btn')).click();
  }

  isEnabled() {
  	return element(by.id('login_btn')).isEnabled();
  }

  browserWait() {
  	browser.driver.sleep(5000);
  }
}
