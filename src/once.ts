import { AnyFunction } from './types';
import { proxy } from './proxy';

export function once<T extends AnyFunction>(fn: T) {
  let hasExec = false;
  let result;
  return proxy(fn,function (args: Parameters<T>) {
    if (!hasExec) {
      hasExec = true;
      result = fn.apply(this, args);
    }
    return result;
  });
}
