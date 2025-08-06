import { Transform } from "node:stream";

const upperCaseTransform = new Transform({
  transform(chunk, encoding, callback) {
    callback(null, chunk.toString().toUpperCase())
  }
})

// piping the stream
process.stdin.pipe(upperCaseTransform).pipe(process.stdout)


