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

## retry

## tryCatch
