import { readFile, writeFile } from "node:fs";
import { join, dirname } from "node:path"
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

readFile(__filename, { encoding: "utf-8" }, (err, contents) => {
  if (err) {
    console.error(err)
    return;
  }
  writeFile(join(__dirname, "async_cb_ops.txt"), contents.toUpperCase(), (err) => {
    if (err) {
      console.error(err)
    } else {
      console.log("File written successfully")
    }
  })
  console.log("hehehehehehhehe")
})

console.log("hello")
