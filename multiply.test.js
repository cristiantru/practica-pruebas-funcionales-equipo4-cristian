const multiply = require('./multiply');

test('multiplica 2 * 3 es 6', () => {
  expect(multiply(2, 3)).toBe(6);
});

test('multiplica 0 * 5 es 0', () => {
  expect(multiply(0, 5)).toBe(0);
});
