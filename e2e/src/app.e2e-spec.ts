import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should first link in nav bar equal value', () => {
    page.navigateTo();
    expect(page.getNavButtonFirstText()).toEqual('Добро пожаловать');
  });

  it('should second link in nav bar equal value', () => {
    page.navigateTo();
    expect(page.getNavButtonSecondText()).toEqual('Перевести в FB');
  });

  it('should change router after click on link in navbar', () => {
    page.navigateTo();
    page.getNavButtonSecond().click();

    expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + '/receive');
  });

  it('should save limit value in session', () => {
    page.navigateTo();
    page.getNavButtonSecond().click();
    page.getInput().sendKeys('11.12');
    page.getNavButtonFirst().click();
    page.getNavButtonSecond().click();

    expect(page.getInput().getAttribute('value')).toEqual('11.12');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
