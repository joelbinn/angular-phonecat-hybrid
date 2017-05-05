import { AngularPhonecatHybridIIPage } from './app.po';

describe('angular-phonecat-hybrid-ii App', () => {
  let page: AngularPhonecatHybridIIPage;

  beforeEach(() => {
    page = new AngularPhonecatHybridIIPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
