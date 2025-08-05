import { createRequire } from "node:module"


// ✅ 😋
// console.log(import.meta.resolve(
//   "pino"
// ))

const require = createRequire(import.meta.url)
const f = require("./format.js").default
const pino = require("pino")
const logger = pino()

logger.info(f("Hello "))

