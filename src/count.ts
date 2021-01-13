import { AnyFunction } from './types';
import { proxy } from './proxy';

export function count<T extends AnyFunction>(fn: T, callback: (i: number) => void) {
  let i = 1;
  return proxy(fn, function (args) {
    callback(i++);
    return fn.apply(this, args);
  });
}
