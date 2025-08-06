import { readdirSync, statSync } from "fs";

try {
  const files = readdirSync(".")
  for (const name of files) {
    const stat = statSync(name)
    const typeLabel = stat.isDirectory() ? "Dir" : "file"
    const { atime, ctime, mtime, birthtime } = stat
    console.group(`${typeLabel} ${name}`)
    console.log('Access Time', atime.toLocaleString())
    console.log('CHange Time', ctime.toLocaleString())
    console.log('Modified Time', mtime.toLocaleString())
    console.log('BirthTime Time', birthtime.toLocaleString())
    console.groupEnd()
    console.log()
  }
} catch (error) {
  console.error(error)
}
