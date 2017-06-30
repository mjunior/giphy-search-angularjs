import { GiphySearchAngularjsPage } from './app.po';

describe('giphy-search-angularjs App', () => {
  let page: GiphySearchAngularjsPage;

  beforeEach(() => {
    page = new GiphySearchAngularjsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
