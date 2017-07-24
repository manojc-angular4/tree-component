import { TreeComponentPage } from './app.po';

describe('tree-component App', () => {
  let page: TreeComponentPage;

  beforeEach(() => {
    page = new TreeComponentPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
