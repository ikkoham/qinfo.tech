import { Ikkoham2Page } from './app.po';

describe('ikkoham2 App', () => {
  let page: Ikkoham2Page;

  beforeEach(() => {
    page = new Ikkoham2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
