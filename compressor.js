import fs from "node:fs"
import zlib from "node:zlib"
import { pipeline } from 'node:stream'

const input_stream = fs.createReadStream("t.csv")

const gzip_transform = zlib.createGzip()

const output_stream = fs.createWriteStream("t.csv.gz")

pipeline(
  input_stream,
  gzip_transform,
  output_stream,
  (err) => {
    if (err) {
      console.error('Pipeline failed.', err);
    } else {
      console.log('Pipeline succeeded.');
    }
  },
);

