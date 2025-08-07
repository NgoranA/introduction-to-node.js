import assert from "node:assert"
// - **Truthiness:**
//     - `assert.ok(val)` – checks for truthiness.
// - **Equality (Coercive and Strict):**
//     - `assert.equal(val1, val2)` – checks using `==` (coercive). "1" == 1
//     - `assert.strictEqual(val1, val2)` – checks using `===` (strict). "1" == 1 False
// - **Deep Equality:**
//     - `assert.deepEqual(obj1, obj2)` – compares object structures (coercive).
//     - `assert.deepStrictEqual(obj1, obj2)` – compares object structures (strict).
// - **Error Handling:**
//     - `assert.throws(fn)` – expects a function to throw.
//     - `assert.doesNotThrow(fn)` – expects a function not to throw.
//     - `assert.rejects(promise)` / `assert.doesNotReject(promise)` – for promise-based APIs.
// - **Miscellaneous:**
//     - `assert.ifError(err)` – ensures that an error value is falsy.
//     - `assert.match(string, regex)` – tests string pattern matching.
//
//

function add(a, b) {
  if (typeof a !== 'number' || typeof b !== "number") throw new TypeError('both a and b must be numbers')
  return a + b;
}

assert.strictEqual(add(2, 2), 4)
assert.strictEqual(typeof add(3, 4), "number")

assert.throws(() => add("2", 2), TypeError("both a and b must be numbers"))
assert.throws(() => add("2", "4"), TypeError("both a and b must be numbers"))
assert.throws(() => add(4, "4"), TypeError("both a and b must be numbers"))

assert.doesNotThrow(add(2, 2), 4)


// pseudoRequest("ksdfksjfkj", (err, data) => {
//   assert.ifError(err)
//
// })


// when you have jest installed
'use strict'
const add = require('../add')

test('throw when inputs are not numbers', () => {
  expect(() => add('5', '5')).toThrowError(Error('inputs must be numbers'))
  expect(() => add(5, '5')).toThrowError(Error('inputs must be numbers'))
  expect(() => add('5', 5)).toThrowError(Error('inputs must be numbers'))
  expect(() => add({}, null)).toThrowError(Error('inputs must be numbers'))
})

test('adds two numbers', () => {
  expect(add(5, 5)).toStrictEqual(10)
  expect(add(-5, 5)).toStrictEqual(0)
})
