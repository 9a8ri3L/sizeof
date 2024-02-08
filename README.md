![GitHub Release](https://img.shields.io/github/v/release/9a8ri3L/sizeof)
![NPM License](https://img.shields.io/npm/l/%40g-lib%2Fsizeof)
![GitHub forks](https://img.shields.io/github/forks/9a8ri3L/sizeof?style=plastix&color=yellow)
![GitHub stars](https://img.shields.io/github/stars/9a8ri3L/sizeof?style=flat-square)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/1adbc875e33c46d1a07ee1d2dc8abdf0)](https://app.codacy.com/gh/9a8ri3L/sizeof/dashboard?utm_source=gh&utm_medium=referral&utm_content=&utm_campaign=Badge_grade)
![GitHub Downloads (all assets, all releases)](https://img.shields.io/github/downloads/9a8ri3L/sizeof/total)

![GitHub commits since latest release](https://img.shields.io/github/commits-since/9a8ri3L/sizeof/latest)
![GitHub contributors](https://img.shields.io/github/contributors-anon/9a8ri3L/sizeof)
![npm bundle size (scoped)](https://img.shields.io/bundlephobia/minzip/%40g-lib/sizeof)

# sizeof

### A utility function that calculates the size or the length of various types.

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

#### Contributing is always welcomed.

### License [MIT](https://choosealicense.com/licenses/mit/)
