// stdio

// process.stdin => Readable stream that process input
// process.stdout => Writable Stream that processes output
// process.stderr => Writable stream for process's error output

console.log("Process is initialized")
process.stdin.pipe(process.stdout)

