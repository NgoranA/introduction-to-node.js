import { readFile, writeFile } from "node:fs/promises"
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

try {
  const contents = await readFile(__filename, { encoding: "utf-8" })
  await writeFile(join(__dirname, 'async_prom_file_ops.txt'), contents.toUpperCase())
} catch (error) {
  console.error(error)
}


