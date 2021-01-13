import { AnyFunction } from './types';
import { tryCatch } from './tryCatch';

export function retry<T extends AnyFunction>(fn: T, n: number) {
  let i = 1;

  let fnArgs;

  const tryFn = tryCatch(function (...args) {
    fnArgs = args;
    return fn.apply(this, args);
  }, err => {
    if (i < n) {
      i++;
      return tryFn.apply(this, fnArgs);
    } else {
      throw err;
    }
  });

  return tryFn;
}
