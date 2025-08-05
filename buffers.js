import { StringDecoder } from "node:string_decoder"
const safe_buffer = Buffer.alloc(10)
console.log(safe_buffer)
const unsafe_buffer = Buffer.allocUnsafe(10)
console.log(unsafe_buffer)

const world = "Hello world"
const world_buffer = Buffer.from(world, "base64")
const world_buffer2 = Buffer.from(world, "base64")
console.log(world_buffer)
const world_string = world_buffer.toString("utf8")
console.log(world_string)

const decoder = new StringDecoder("base64")
let result = ''
const fragment1 = decoder.write(world_buffer)
result += fragment1
const fragment2 = decoder.write(world_buffer2)
result += fragment2
console.log(result)

