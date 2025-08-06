import { readdir, readdirSync } from "node:fs";
import { readdir as readdirProm } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)


// try {
//   const sileSync = readdirSync(".")
//   console.log(sileSync)
// } catch (error) {
//   console.error(error)
// }
//
// // callback
//
// readdir(__dirname, (err, content) => {
//   if (err) {
//     console.error(err)
//     return
//   }
//   console.log(content)
// })

// promise

try {
  const files = await readdirProm(".")
  console.log(files)
} catch (error) {
  console.error(error)
}











