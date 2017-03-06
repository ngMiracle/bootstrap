import { browser, element, by } from 'protractor';

export class BootstrapPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('bs-root h1')).getText();
  }
}
