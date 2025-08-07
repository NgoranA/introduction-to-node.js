import { execSync } from "node:child_process"

const output = execSync('ls')
console.log(output.toString())
