# TypeScript 积累

### 基础

#### 对象的类类型-接口

```
任意属性: [propName: string]: any;
对象重的所有属性都将是它类型的子集
```

#### 数组

- 数组的表示方法
  - let arr: number[] = []
  - 泛型 let arr: Array<string> = []
  - 接口 interface Arrar { [index: number]: number }

### 函数

- 用接口表示函数

```
interface SearchFunc {
    (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
    return source.search(subString) !== -1;
}
```

- 剩余参数

```
function push(array, ...items) {
    items.forEach(function(item) {
        array.push(item);
    });
}

let a: any[] = [];
push(a, 1, 2, 3);
```
