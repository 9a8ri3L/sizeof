/* eslint-disable @typescript-eslint/no-explicit-any */
import { expect, it, describe } from 'vitest';
import sizeof from './index';

describe('Size function tests', () => {
  it('sizeof Array', () => {
    expect(sizeof([1, 2, 3])).toBe(3);
  });
  it('sizeof Object', () => {
    expect(sizeof({ foo: 'bar', bar: 'baz' })).toBe(2);
  });
  it('sizeof Map', () => {
    expect(sizeof(new Map().set('foo', true))).toBe(1);
  });
  it('sizeof Set', () => {
    expect(sizeof(new Set().add('foo').add('bar'))).toBe(2);
  });
  it('sizeof Number', () => {
    expect(sizeof(2024)).toBe(4);
  });
  it('sizeof BigInt', () => {
    expect(sizeof(100e15)).toBe(18);
  });
  it('sizeof Symbol', () => {
    expect(sizeof(Symbol('foo'))).toBe(3);
  });
  it('sizeof Function', () => {
    expect(
      sizeof(function foo(a: number, b: number) {
        return a + b;
      })
    ).toBe(0);
  });
  it('sizeof function Return', () => {
    expect(
      sizeof(function bar() {
        return 'bar';
      })
    ).toBe(3);
  });
  it('sizeof function constructor', () => {
    expect(
      sizeof(
        new (function Foo(this: any) {
          this.name = 'Foo';
          this.age = 30;
        } as any)()
      )
    ).toBe(2);
  });
  it('sizeof Class', () => {
    expect(
      sizeof(
        new (class Bar {
          // eslint-disable-next-line prettier/prettier
          constructor(public name: string) { }
        })('')
      )
    ).toBe(1);
  });
  it('sizeof extended Class', () => {
    expect(
      sizeof(
        new (class Foo extends Map<any, any> {
          constructor(public name: string) {
            super();
          }
        })('')
      )
    ).toBe(0);
  });
  it('sizeof null', () => {
    expect(sizeof(null)).toBe(0);
  });
  it('sizeof undefined', () => {
    expect(sizeof(undefined)).toBe(0);
  });
});
