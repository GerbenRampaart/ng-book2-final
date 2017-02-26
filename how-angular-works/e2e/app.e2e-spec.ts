import { HowAngularWorksPage } from './app.po';

describe('how-angular-works App', () => {
  let page: HowAngularWorksPage;

  beforeEach(() => {
    page = new HowAngularWorksPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
