import { AmpUiPage } from './app.po';

describe('amp-ui App', function() {
  let page: AmpUiPage;

  beforeEach(() => {
    page = new AmpUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
