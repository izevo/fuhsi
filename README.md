# FuHsi.js

伏羲，JS 函数增强库

- count
- duration
- once
- retry
- tryCatch

## count

```javascript
function foo() {}

let val;
const fn = count(foo, i => val = i);

fn();
fn();
console.log(val); // 2
```

## duration

```javascript
function foo() {
  for(let i = 0; i < 100000; i++) {}
}
    
let val;
const fn = count(foo, time => val = time);
fn();
console.log(val); // 0.512
```

## once

```javascript
const now = once(Date.now);
console.log(now() == now()); // true
```

## retry
```javascript
let i = 1;
async function foo() {
  if (i == 3) {
    return 'done';
  }
  i++;
  throw new Error('test');
  
}

const fn = tryCatch(foo, 3);
fn(); // 'done'
```

## catch
```javascript
async function foo() {
  throw new Error('test');
}

const fn = tryCatch(foo, e => 'error');
fn(); // error
```
