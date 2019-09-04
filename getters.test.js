const getters = require('./dist/index').getters;

describe('getters', () => {
  describe('pageCount', () => {
    test('evenly sized pages', () => {
      const state = {};
      const otherGetters = {
        start: 0,
        pageSize: 10
      };

      const result = getters.pageCount(state, otherGetters)(50);

      expect(result).toBe(5);
    });

    test('one partial page', () => {
      const state = {};
      const otherGetters = {
        start: 0,
        pageSize: 10
      };

      const result = getters.pageCount(state, otherGetters)(3);

      expect(result).toBe(1);
    });

    test('partial last page', () => {
      const state = {};
      const otherGetters = {
        start: 0,
        pageSize: 10
      };

      const result = getters.pageCount(state, otherGetters)(52);

      expect(result).toBe(6);
    });

    test('no pages', () => {
      const state = {};
      const otherGetters = {
        start: 0,
        pageSize: 10
      };

      const result = getters.pageCount(state, otherGetters)(0);

      expect(result).toBe(0);
    });
  });

  describe('currentPage', () => {
    test('start is first record is on first page', () => {
      const state = {};
      const otherGetters = {
        start: 0,
        pageSize: 10
      };

      const result = getters.currentPage(state, otherGetters);

      expect(result).toBe(1);
    });

    test('start is a middle record on first page', () => {
      const state = {};
      const otherGetters = {
        start: 5,
        pageSize: 10
      };

      const result = getters.currentPage(state, otherGetters);

      expect(result).toBe(1);
    });

    test('start is a last record on first page', () => {
      const state = {};
      const otherGetters = {
        start: 9,
        pageSize: 10
      };

      const result = getters.currentPage(state, otherGetters);

      expect(result).toBe(1);
    });

    test('start is first record in a middle page', () => {
      const state = {};
      const otherGetters = {
        start: 10,
        pageSize: 10
      };

      const result = getters.currentPage(state, otherGetters);

      expect(result).toBe(2);
    });

    test('start is a middle record in a middle page', () => {
      const state = {};
      const otherGetters = {
        start: 13,
        pageSize: 10
      };

      const result = getters.currentPage(state, otherGetters);

      expect(result).toBe(2);
    });

    test('start is last record in a middle page', () => {
      const state = {};
      const otherGetters = {
        start: 19,
        pageSize: 10
      };

      const result = getters.currentPage(state, otherGetters);

      expect(result).toBe(2);
    });
  });

  describe('slice', () => {
    test('front chunk', () => {
      const state = {};
      const otherGetters = {
        start: 0,
        pageSize: 2
      };
      const records = [1, 2, 3, 4, 5, 6];

      const result = getters.slice(state, otherGetters)(records);

      expect(result).toEqual([1, 2]);
    });

    test('middle chunk', () => {
      const state = {};
      const otherGetters = {
        start: 2,
        pageSize: 2
      };
      const records = [1, 2, 3, 4, 5, 6];

      const result = getters.slice(state, otherGetters)(records);

      expect(result).toEqual([3, 4]);
    });

    test('back chunk', () => {
      const state = {};
      const otherGetters = {
        start: 4,
        pageSize: 2
      };
      const records = [1, 2, 3, 4, 5, 6];

      const result = getters.slice(state, otherGetters)(records);

      expect(result).toEqual([5, 6]);
    });

    test('incomplete page', () => {
      const state = {};
      const otherGetters = {
        start: 3,
        pageSize: 20
      };
      const records = [1, 2, 3, 4, 5, 6];

      const result = getters.slice(state, otherGetters)(records);

      expect(result).toEqual([4, 5, 6]);
    });

    test('no records', () => {
      const state = {};
      const otherGetters = {
        start: 0,
        pageSize: 2
      };
      const records = [];

      const result = getters.slice(state, otherGetters)(records);

      expect(result).toEqual([]);
    });
  });
});
