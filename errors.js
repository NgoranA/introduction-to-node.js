function doTask(amount) {
  if (typeof amount !== 'number') throw new TypeError("amount must be a number")
  if (amount <= 0) throw new RangeError("amount must be greater than 0")
  return amount / 2;
}

function run() {
  try {
    console.log(doTask("invalid"))
  } catch (error) {
    console.error(error)
  }
}

// BUG : NEVER EVER NEVER DO THIS EVER
// throw "something happened"

// run()

// Error - Generic
// TypeError - Invalid type
// RangeError - Out of bounds values
// ReferenceError - Undefined reference
// SyntaxError - Invalid syntax (JavaScript)
// URIError - malform URI
// EvalError

class OddError extends Error {
  constructor(name = '') {
    super(`${name} must be even`)
    this.name = 'OddError'
    this.code = 'ERR_MUST_BE_EVEN'
    this.statusCode = 400
  }
}

function doTask2(amount) {
  if (amount % 2 === 1) {
    throw new OddError('amount')
  }
  return amount / 2;
}


function run2() {
  try {
    console.log(doTask2(3))
  } catch (error) {
    console.error(error)
  }
}

run2()

function doTaskAsync(amount) {
  return new Promise((resolve, reject) => {
    if (typeof amount !== 'number') reject(new TypeError("amount must be a number"))
    else if (amount % 2 === 1) reject(new OddError("amount"))
    else if (amount <= 0) reject(new RangeError("amount must be greater than 0"))
    else resolve(amount / 2)
  })
}

doTaskAsync(3)
  .then((result) => console.log("Result", result))
  .catch(err => console.error('Error: ', err))


async function run3() {
  try {
    const result = await doTaskAsync(3)
    console.log(result)
  } catch (error) {
    console.error(error)
  }
}

run3()


async function doTask4(amount) {
  if (amount % 2 === 1) {
    throw new OddError('amount')
  }
  return amount / 2;
}

doTask4(3).catch(console.error)


function doTaskCallback(amount, callback) {
  if (amount % 2 === 1) {
    return callback(new OddError('amount'))
  }
  callback(null, amount / 2)
}

doTaskCallback(3, (err, data) => {
  if (err) {
    console.error("Error", err.message)
  } else {
    console.log("Result", data)
  }
})

