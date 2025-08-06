import fs from "node:fs"
import { Writable } from "node:stream"

const writable = fs.createWriteStream("output.ts")
const readable = fs.createReadStream("chat.js")
let result = ""

readable.on("data", (chunk) => {
  result += chunk.toString()
})

writable.write("Line 1\n")
writable.write("Line 2\n")

readable.on("end", () => {
  writable.write(result)
  writable.end(() => console.log("Finished writing"))
})


const dataCollector = []


const my_writable = new Writable({
  write(chunk, encoding, callback) {
    dataCollector.push(chunk.toString())
    callback()
  }
})



my_writable.on("finish", () => console.log("Collected", collectedData))

my_writable.write("Mark")
my_writable.write("Ulrich")
my_writable.write("Ambe")

writable.end("End of data")





