const create = require('./dist/index').default;

describe('module creation', () => {
  test('module is namespaced', () => {
    const module = create({ pageSize: 5 });

    expect(module.namespaced).toBe(true);
  });

  test('start is 0', () => {
    const module = create({ pageSize: 5 });

    expect(module.state.start).toBe(0);
  });

  test('pageSize is set through settings', () => {
    const module = create({ pageSize: 25 });

    expect(module.state.pageSize).toBe(25);
  });

  test('pageSize is required', () => {
    expect(() => {
      const module = create({});
    }).toThrow(Error);
  });

  test('pageSize cannot be 0', () => {
    expect(() => {
      const module = create({ pageSize: 0 });
    }).toThrow(Error);
  });

  test('pageSize cannot be negative', () => {
    expect(() => {
      const module = create({ pageSize: -1 });
    }).toThrow(Error);
  });
});
