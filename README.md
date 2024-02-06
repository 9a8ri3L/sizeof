![GitHub forks](https://img.shields.io/github/forks/9a8ri3L/sizeof?style=plastix&color=yellow)
![GitHub stars](https://img.shields.io/github/stars/9a8ri3L/sizeof?style=flat-square)

![GitHub (Pre-)Release Date](https://img.shields.io/github/release-date-pre/9a8ri3L/sizeof)
![GitHub contributors](https://img.shields.io/github/contributors-anon/9a8ri3L/sizeof)
![npm package minimized gzipped size](https://img.shields.io/bundlejs/size/@g-lib/sizeof)
![GitHub commit activity](https://img.shields.io/github/commit-activity/t/9a8ri3L/sizeof)

# sizeof

### A utility function that calculates the size or length of any given input.

#### install

```
npm i @g-lib/sizeof
```

```
yarn add @g-lib/sizeof
```

```
pnpm add @g-lib/sizeof
```

### Usage:

```ts
import sizeof from "@g-lib/sizeof";

// or

const sizeof = require("@g-lib/sizeof");

console.log(sizeof({ foo: "bar", bar: "baz" })); // 2
console.log(sizeof([1, 2, 3])); // 3
console.log(sizeof(new Map().set("foo", true))); // 1
console.log(sizeof(new Set().add("foo").add("bar"))); // 2
console.log(sizeof(2024)); // 4
console.log(sizeof(100e15)); // 18
console.log(sizeof(Symbol("foo"))); // 3
console.log(
  sizeof(function foo(a: any, b: any) {
    return a + b;
  })
); // 0
console.log(
  sizeof(function bar() {
    return "bar";
  })
); // 3
console.log(
  sizeof(
    new (function Foo(this: any) {
      this.name = "Foo";
      this.age = 30;
    } as any)()
  )
); // 2
console.log(
  sizeof(
    new (class Foo extends Map<any, any> {
      constructor(public name: string) {
        super();
      }
    })("")
  )
); // 0
console.log(
  sizeof(
    new (class Bar {
      constructor(public name: string) {}
    })("")
  )
); // 1
```

### License: MIT

#### Contributing is always welcomed.
