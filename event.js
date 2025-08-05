import fs, { readFile } from "node:fs"
import { readFile as readFilePromise } from "node:fs/promises"
import { dirname } from "node:path"
import { fileURLToPath } from "node:url"

// fs.readFile('file.txt', (err, data) => {
//   if (err) throw err
//   console.log(data)
// })
//
// fs.readFile('file.txt', (err, data) => {
//   if (err) throw err
//   console.log(data)
// })
//
// console.log("Ngoran")
//


const __filename = fileURLToPath(import.meta.url)


const [bigFile, mediumFile, smallFile] = Array.from({ length: 3 }, () => __filename)

const print = (err, data) => {
  if (err) {
    console.error(err)
    return;
  };
  console.log(data)
}

readFile(bigFile, { encoding: "utf-8" }, (err, content) => {
  print(err, content)
  readFile(mediumFile, { encoding: "utf-8" }, (err, data) => {
    print(err, data)
    readFile(smallFile, { encoding: "utf-8" }, print)
  })
})





readFilePromise(bigFile).then(contents => {
  console.log(contents)
  return readFilePromise(mediumFile)
}).then(contents => {
  console.log(contents)
  return readFilePromise(smallFile)
}).then(contents => {
  console.log(contents)
}).catch(err => console.error(err)












