'use strict'

import pino from "pino"
import fs from "node:fs/promises"
import upper from "./format.js"

const logger = pino()

logger.info("my package started here")
logger.info(upper("my first commonjs module"))
console.info("the files are here ==> ", await fs.readdir("."))
process.stdin.resume()




