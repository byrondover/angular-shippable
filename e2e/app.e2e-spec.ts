import { AngularShippablePage } from './app.po';

describe('angular-shippable App', () => {
  let page: AngularShippablePage;

  beforeEach(() => {
    page = new AngularShippablePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
