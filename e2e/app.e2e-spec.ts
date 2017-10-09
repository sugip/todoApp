import { TodoAppPage } from './app.po';

describe('todo-app App', () => {
  let page: TodoAppPage;

  beforeEach(() => {
    page = new TodoAppPage();
  });

  it('should display Page title', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Todo List');
  });
});
