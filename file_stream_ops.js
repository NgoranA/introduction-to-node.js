import { pipeline } from "node:stream"
import { dirname, join } from "node:path"
import { createReadStream, createWriteStream } from "node:fs";
import { fileURLToPath } from "node:url";


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


pipeline(createReadStream(__filename), createWriteStream(join(__dirname, "file_stream_ops.txt")), (err) => {
  if (err) console.error(err)
  else console.log("File copy complete")
})

