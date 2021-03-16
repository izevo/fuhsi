# FuHsi.js

伏羲，JS 函数增强库；Javascript Function Enhancement Library.

- [count](#count)
- [duration](#duration)
- [filter](#filter)
- [once](#once)
- [retry](#retry)
- [tryCatch](#tryCatch)

## count

统计函数运行次数

Count the number of runs of the function

```javascript
function foo() {}

let val;
const fn = count(foo, i => val = i);

fn();
fn();
console.log(val); // 2
```

## duration

🔀 统计函数运行时间

Statistical function running time

```javascript
function foo() {
  for(let i = 0; i < 100000; i++) {}
}
    
let val;
const fn = count(foo, time => val = time);
fn();
console.log(val); // 0.512
```

## filter

过滤函数执行

Filter function execution

```javascript
document.addEventListener('click', filter(() => {
  console.log('Click button');  
}), e => e.target.tagName === 'BUTTON');
```

## once

确保函数只执行一次

Ensure that the function is executed only once

```javascript
const now = once(Date.now);
console.log(now() == now()); // true
```

## retry

🔀 函数报错自动重试，支持异步

Automatic function retry

```javascript
let i = 1;
async function foo() {
  if (i == 3) {
    return 'done';
  }
  i++;
  throw new Error('test');
  
}

const fn = retry(foo, 3);
fn(); // 'done'
```

## tryCatch

🔀 函数异常处理，支持异步

Function exception catcher, support asynchronous

```javascript
function foo() {
  throw new Error('test');
}

const fn = tryCatch(foo, e => console.log('catch error'));
fn(); // catch error
```
