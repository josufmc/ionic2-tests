import { CompanionPage } from './app.po';

describe('companion App', () => {
  let page: CompanionPage;

  beforeEach(() => {
    page = new CompanionPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
