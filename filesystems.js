import fs from "node:fs" // helps to file operations (creating, reading, writing, watching, delete)
import path from "node:path" // handle paths of files and folders across different platforms
import { fileURLToPath } from "node:url"


const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

__filename // the absolute path of the current file
__dirname // the absolute path of the directory that contains the current file

console.log("Current file", __filename)
console.log("Current directory", __dirname)


// path.join(__dirname, "output.txt")
// C:\\Downloads\ // windows
// /home/ngorana/Downloads

const output_file_path = path.join(__dirname, "output.txt") // NOTE: the file itself is not created here
console.log("Output file path", output_file_path)


// Demonstrate path deconstruction
//
console.log("Parsed __filename", path.parse(__filename))
console.log("Basename", path.basename(__filename))
console.log("Dirname", path.dirname(__filename))
console.log("Extension", path.extname(__filename))

// abstractions
// Sync APIs
// Callback based APIs
// Promise based APIs
// Stream based APIs




