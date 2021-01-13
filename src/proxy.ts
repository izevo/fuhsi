import { AnyFunction } from './types';

interface Handler<T extends AnyFunction, R = ReturnType<T>> {
  (args: Parameters<T>): R;
}

/**
 *
 * @param fn
 * @param handler
 */
export function proxy<T extends AnyFunction, R = ReturnType<T>>(fn: T, handler: Handler<T, R>) {
  const name = fn.name;
  return {
    [name]: function(...args: Parameters<T>): R {
      return handler.call(this, args);
    },
  }[name];
}
