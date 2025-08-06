import fs from "node:fs";
import { Readable } from "node:stream";


// const readable = fs.createReadStream("event.js")
// readable.on("data", (chunk) => {
//   console.log(chunk.toString())
// })
// readable.on("end", () => {
//   console.log("Finished reading")
// })


// creating a custom stream is as such
//

const data = ["Hello", "Jude", "Ernest", "London boy", "Ze Baby", "Mr Gile's Fave a.k.a Mr Montana"];
const myReadable = new Readable({
  read() {
    let chunk = data.shift()
    data.length > 0 ? this.push(chunk) : this.push(null)
  }
})


myReadable.on('data', (data) => {
  console.log(data.toString())
})

myReadable.on('end', () => {
  console.log("Done")
})
