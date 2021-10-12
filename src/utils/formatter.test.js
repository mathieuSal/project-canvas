import { groupBy } from './formatter';

test('group by when the property is missing', () => {
  const array = [{ name: 'toto', age: 26 }];
  const property = 'lastname';
  expect(groupBy(array, property)).toStrictEqual([]);
});

test('group by nominal', () => {
  const array = [{ name: 'toto', age: 26 }];
  const property = 'name';
  expect(groupBy(array, property)).toStrictEqual([[{ name: 'toto', age: 26 }]]);
});
