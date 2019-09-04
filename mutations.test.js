const mutations = require('./dist/index').mutations;

describe('mutations', () => {
  describe('CHANGE_PAGE', () => {
    test('to first page', () => {
      const state = {
        start: 5,
        pageSize: 20
      };

      const payload = {
        page: 1
      };

      mutations.CHANGE_PAGE(state, payload);

      expect(state).toEqual({
        start: 0,
        pageSize: 20
      });
    });

    test('to later page', () => {
      const state = {
        start: 5,
        pageSize: 20
      };

      const payload = {
        page: 3
      };

      mutations.CHANGE_PAGE(state, payload);

      expect(state).toEqual({
        start: 40,
        pageSize: 20
      });
    });

    test('cannot go to 0th page', () => {
      const state = {
        start: 5,
        pageSize: 20
      };

      const payload = {
        page: 0
      };

      expect(() => {
        mutations.CHANGE_PAGE(state, payload);
      }).toThrow(Error);
    });

    test('cannot go to negative page', () => {
      const state = {
        start: 5,
        pageSize: 20
      };

      const payload = {
        page: -1
      };

      expect(() => {
        mutations.CHANGE_PAGE(state, payload);
      }).toThrow(Error);
    });
  });

  describe('CHANGE_PAGE_SIZE', () => {
    test('to a positive number', () => {
      const state = {
        start: 5,
        pageSize: 20
      };

      const payload = {
        pageSize: 10
      };

      mutations.CHANGE_PAGE_SIZE(state, payload);

      expect(state).toEqual({
        start: 5,
        pageSize: 10
      });
    });

    test('cannot change to 0', () => {
      const state = {
        start: 5,
        pageSize: 20
      };

      const payload = {
        pageSize: 0
      };

      expect(() => {
        mutations.CHANGE_PAGE_SIZE(state, payload);
      }).toThrow(Error);
    });

    test('cannot change to negative number', () => {
      const state = {
        start: 5,
        pageSize: 20
      };

      const payload = {
        pageSize: -1
      };

      expect(() => {
        mutations.CHANGE_PAGE_SIZE(state, payload);
      }).toThrow(Error);
    });
  });
});
