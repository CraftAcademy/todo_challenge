describe('ToDo list', function() {

  it('views the ToDo list', function() {
    browser.get('http://localhost:8100/#/tab/dash');
    expect(browser.getTitle()).toEqual('Dashboard');
  });

});