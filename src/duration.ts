import { AnyFunction } from './types';
import { proxy } from './proxy';
import { performance } from 'perf_hooks';

const now = performance.now;

export function duration<T extends AnyFunction>(fn: T, callback: (time: number) => void) {
  return proxy<T>(fn, function (args) {
    const startTime = now();
    const result = fn.apply(this, args);
    if (result instanceof Promise) {
      result.then(() => {
        const endTime = now();
        callback(endTime - startTime);
      });
      return result;
    } else {
      const endTime = now();
      callback(endTime - startTime);
      return result;
    }
  });
}
