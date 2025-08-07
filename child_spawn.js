import { spawn } from "node:child_process";

// const child = spawn('node', ['-e', "console.log('Hello from spawned process')"])
//
// child.stdout.on('data', (data) => {
//   console.log(`Child stdout: ${data.toString()}`)
// })
//
// child.stderr.on('data', (data) => {
//   console.error(`CHild Error: ${data.toString()}`)
// })
//
// child.on("close", (code) => {
//   console.log(`Child process exited with code ${code}`)
// })

// const child_config = spawn('node', ['-e', "console.log('ENV STUFF: ', process.env)"])
// child_config.stdout.pipe(process.stdout)

// const child_config2 = spawn(process.execPath, ['-e', "console.log('ENV STUFF: ', process.env)"], {
//   env: { MY_VAR: 'Hello here' },
// })
// child_config2.stdout.pipe(process.stdout)


const custom_process = spawn('ping', ['-c', '4', 'google.com'])

custom_process.stdout.pipe(process.stdout)

console.log("Hellow")








