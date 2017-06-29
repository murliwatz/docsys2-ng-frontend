import { Docsys2NgFrontendPage } from './app.po';

describe('docsys2-ng-frontend App', () => {
  let page: Docsys2NgFrontendPage;

  beforeEach(() => {
    page = new Docsys2NgFrontendPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
