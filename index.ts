/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * The `sizeof` function returns the size or length of various types of input, including numbers,
 * strings, arrays, objects, and symbols.
 * @param {any} input - The `input` parameter can be any value or object. The `sizeof` function
 * calculates the size of the input based on its type and properties.
 * @returns a number - the size or length of the input.
 *
 *
 * ```ts
 *            console.log(sizeof({foo: 'bar', bar: 'baz'})) // 2
 *            console.log(sizeof([1,2,3])) // 3
 *            console.log(sizeof(new Map().set('foo', true))) // 1
 *            console.log(sizeof(new Set().add('foo').add('bar'))) // 2
 *            console.log(sizeof(2024)) // 4
 *            console.log(sizeof(100e15)) // 18
 *            console.log(sizeof(Symbol('foo'))) // 3
 *            console.log(sizeof(function foo(a: any,b: any){return a+b})) // 0
 *            console.log(sizeof(function bar(){return 'bar'})) // 3
 *            console.log(sizeof(new (function Foo(this: any){this.name = 'Foo'; this.age = 30} as any)())) // 2
 *            console.log(sizeof(new (class Foo extends Map<any,any>{constructor(public name: string){super()}})(''))) // 0
 *            console.log(sizeof(new (class Bar {constructor(public name: string){}})(''))) // 1
 *
 *
 *
 * ```
 *
 *
 *@author Gabriel |
 *{@link https://github.com/9a8ri3L/sizeof Github}
 *
 * @license MIT License
 * ```
 *
 *
 * ```
 */
export default function sizeof(input: any): number {
  if (typeof input === 'function') return sizeof(input());
  if (!input) return 0;
  if (['number', 'bigint'].includes(typeof input))
    return String(BigInt(input)).length;
  if (typeof input[Symbol.iterator] === 'function' || typeof input === 'symbol')
    return input.length ?? input.size ?? input.description.length;

  return Object.getOwnPropertyNames(input).length;
};