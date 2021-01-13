import { tryCatch } from '../tryCatch';


test('tryCatch',() => {
  let error;

  const throwError = () => {
    throw new Error('test');
  }

  const iThrowError = tryCatch(throwError, function(err: Error) {
    error = err;
    return true;
  });

  const value = iThrowError();
  expect(value).toBe(true);
  expect(error).toBeInstanceOf(Error);
  expect(error.message).toBe('test');
});

test('tryCatch Async',async () => {
  let error;

  const throwErrorAsync = async () => {
    throw new Error('test');
  }

  const iThrowError = tryCatch(throwErrorAsync, function(err: Error) {
    error = err;
    return true;
  });

  const value = iThrowError();
  expect(value).toEqual(Promise.resolve(true));
  await value;
  expect(error).toBeInstanceOf(Error);
  expect(error.message).toBe('test');
});
