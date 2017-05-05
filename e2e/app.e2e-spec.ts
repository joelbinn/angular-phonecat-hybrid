import { AngularPhonecatHybridPage } from './app.po';

describe('angular-phonecat-hybrid App', () => {
  let page: AngularPhonecatHybridPage;

  beforeEach(() => {
    page = new AngularPhonecatHybridPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
