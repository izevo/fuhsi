import { add } from 'test/common';
import { count } from '../count';

test('incarnate',() => {
  const counts = [];
  const iAdd = count(add, function(i: number) {
    counts.push(i);
  });

  const value = iAdd(1);
  iAdd(1);

  expect(value).toBe(2);
  expect(counts).toEqual([1, 2]);
});
