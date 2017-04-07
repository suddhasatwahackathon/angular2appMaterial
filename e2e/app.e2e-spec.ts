import { TestAppHelloWorldPage } from './app.po';

describe('test-app-hello-world App', () => {
  let page: TestAppHelloWorldPage;

  beforeEach(() => {
    page = new TestAppHelloWorldPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
