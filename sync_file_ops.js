// Sync File Ops
import { readFileSync, writeFileSync } from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const contents = readFileSync(__filename, { encoding: "utf-8" })
console.log(contents)

writeFileSync(path.join(__dirname, "sync_out.txt"), contents.toUpperCase(), {
  flag: "a"
})
