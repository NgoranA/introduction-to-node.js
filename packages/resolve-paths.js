'use strict'

console.group("# package resolution")
console.log(`require(pino) => `, require.resolve("pino"))
console.log(`require(standard) => `, require.resolve("standard"))
console.groupEnd()



console.group("# directory resolution")
console.log(`require('.') => `, require.resolve("."))
console.groupEnd()

console.group("# file resolution")
console.log(`require(./format.js) => `, require.resolve("./format.js"))
console.groupEnd()

console.group("# Node Core APIs resolution")
console.log(`require(node:fs) => `, require.resolve("node:fs"))
console.log(`require(node:util) => `, require.resolve("node:util"))
console.groupEnd()


