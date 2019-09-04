const actions = require('./dist/index').actions;

describe('actions', () => {
  test('goToPage commits CHANGE_PAGE', async () => {
    const commit = jest.fn();
    const payload = { page: 2 };

    await actions.goToPage({commit}, payload);

    expect(commit).toHaveBeenCalledWith('CHANGE_PAGE', { page: 2 });
  });

  test('changePageSize commits CHANGE_PAGE_SIZE', async () => {
    const commit = jest.fn();
    const payload = { pageSize: 11 };

    await actions.changePageSize({commit}, payload);

    expect(commit).toHaveBeenCalledWith('CHANGE_PAGE_SIZE', { pageSize: 11 });
  });
});
