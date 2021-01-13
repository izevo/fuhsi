import { proxy } from './proxy';
import { AnyFunction } from './types';

type AsyncType<T, R> = T extends Promise<any> ? Promise<R> : R;

export function tryCatch<T extends AnyFunction, R = ReturnType<T>>(fn: T, callback: (err: Error) => R) {
  return proxy(fn, function (args: Parameters<T>): ReturnType<T> | AsyncType<ReturnType<T>, R> {
    try {
      const result = fn.apply(this, args);
      if (result instanceof Promise) {
        return result.catch(callback) as any; // 异步函数 catch
      }
      return result;
    } catch (e) {
      // 同步函数 catch
      return callback(e) as any;
    }
  });
}
