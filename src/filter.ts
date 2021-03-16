import { AnyFunction } from './types';
import { proxy } from './proxy';

export function filter<T extends AnyFunction>(fn: T, condition: (...args: Parameters<T>) => boolean) {
  return proxy(fn, args => {
    const result = condition.apply(null, args);
    if (result) {
      return fn();
    }
  });
}
