# Js

### 1.call，apply，bind 的区别

#### 1.call 和 apply

- 都是函数原型链上的方法（ES6 中）
- 都可以作为函数上下文的对象

```
let obj = {
  name: '张三'
}
let fn = function(doing) {
  console.log(this.name + doing)
}
fn.call(obj, '在犯罪')

打印结果： 张三在犯罪

call()接受两个参数，第一个将当前参数的上下文作为调用者的上下文对象，后续的参数作为函数的普通参数
在上述fn的函数中，使用obj的this作为fn的上下文对象，所以this.name是张三
一般来说，还可通过使用call来进行解构
fn.call(null,...arr)来解构
```

apply 用法和 call 一致，只是第二个参数接受的是一个数组

```
fn.apply(obj, ['在吃饭', '在吃面'， '在大家'])
```

#### 2.bind

- bind 当使用 bind 时，会返回一个改变 this 指向的函数，而原函数的 this 并没有改变

```
let obj = {
name: '张三'
}
let fn = function(doing) {
console.log(this.name + doing)
}
let bill = fn.bind(obj, '在犯罪')
bill()
```

### 实现(5).add(6).minus(2)

```
~ function() {

  function check(number) {
    return Number(number) === isNaN() ? 0 : number
  }
  function add(o) {
    return this + check(o)
  }

  function minus(o) {
    return this - check(o)
  }
  Number.prototype.add = add
  Number.prototype.minus = minus

}

```
