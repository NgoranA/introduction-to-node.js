import { execFile } from "node:child_process";

execFile('ls', ['-l'], (err, stdout, stderr) => {
  if (err) {
    console.error(`Eror: ${err.message}`)
    return;
  }
  console.log(`stdout: ${stdout}`)
})
