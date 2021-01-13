import { proxy } from '../proxy';
import { add } from 'test/common';

test('incarnate',() => {
  const iAdd = proxy  (add, function (args) {
    return add(...args) + 1;
  });

  expect(iAdd.name).toBe(add.name);
  expect(iAdd(1)).toBe(add(1) + 1);
});
