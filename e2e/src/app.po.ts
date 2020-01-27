import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getNavButtonFirstText() {
    return element(
      by.xpath(
        '/html[1]/body[1]/ng7-root[1]/div[1]/div[1]/ng7-sidebar[1]/nav[1]/a[1]'
      )
    ).getText() as Promise<string>;
  }

  getNavButtonSecondText() {
    return element(
      by.xpath(
        '/html[1]/body[1]/ng7-root[1]/div[1]/div[1]/ng7-sidebar[1]/nav[1]/a[2]'
      )
    ).getText() as Promise<string>;
  }

  getNavButtonFirst() {
    return element(
      by.xpath(
        '/html[1]/body[1]/ng7-root[1]/div[1]/div[1]/ng7-sidebar[1]/nav[1]/a[1]'
      )
    );
  }

  getNavButtonSecond() {
    return element(
      by.xpath(
        '/html[1]/body[1]/ng7-root[1]/div[1]/div[1]/ng7-sidebar[1]/nav[1]/a[2]'
      )
    );
  }

  getInput() {
    return element(
      by.xpath(
        '/html[1]/body[1]/ng7-root[1]/div[1]/div[2]/ng7-receive[1]/div[1]/div[2]/form[1]/mat-form-field[1]/div[1]/div[1]/div[1]/input[1]'
      )
    );
  }

  getTitle() {
    return element(
      by.xpath(
        '/html[1]/body[1]/ng7-root[1]/div[1]/div[2]/ng7-receive[1]/div[1]/h1[1]'
      )
    );
  }
}
