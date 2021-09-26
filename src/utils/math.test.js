import { sum } from './math.ts';

test('basic sum test', () => {
  expect(sum(10, 3)).toBe(13);
});

test('sum test with number as string', () => {
  expect(sum('10', '3')).toBe(13);
});

test('sum test with float', () => {
  expect(sum('10.5', 3)).toBe(13.5);
});
