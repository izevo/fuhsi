import { once } from '../once';

test('once', () => {
  const iNow = once(Date.now);
  const result1 = iNow();
  const result2 = iNow();

  expect(result1).toBe(result2);
});
