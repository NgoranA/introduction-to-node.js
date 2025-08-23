// mock database

// model.js (Updated)
'use strict'

module.exports = {
  bicycle: bicycleModel()
}

function bicycleModel() {
  const db = {
    1: { id: 1, brand: 'Veloretti', color: 'green' },
    2: { id: 2, brand: 'Batavus', color: 'yellow' }
  }

  return {
    create, read, update, del, uid // Added create, update, del, uid
  }

  // Helper to get the next available ID (simple implementation)
  function uid() {
    return Object.keys(db)
      .sort((a, b) => parseInt(a) - parseInt(b)) // Ensure numeric sort
      .map(Number)
      .filter((n) => !isNaN(n))
      .pop() + 1 + '' // Return as string
  }

  // Create a new bicycle record
  function create(id, data, cb) {
    if (db.hasOwnProperty(id)) {
      const err = Error('resource exists')
      err.status = 409 // Conflict status code is appropriate
      return setImmediate(() => cb(err))
    }
    db[id] = { id: id, ...data } // Store data with its ID
    setImmediate(() => cb(null, id)) // Return the new ID
  }

  // Read an existing bicycle record
  function read(id, cb) {
    if (!(db.hasOwnProperty(id))) {
      const err = Error('not found')
      err.status = 404
      return setImmediate(() => cb(err))
    }
    // Corrected: Pass data to callback
    setImmediate(() => cb(null, db[id]))
  }

  // Update an existing bicycle record
  function update(id, data, cb) {
    if (!(db.hasOwnProperty(id))) {
      const err = Error('not found')
      err.status = 404
      return setImmediate(() => cb(err))
    }
    db[id] = { id: id, ...data } // Replace entire record
    setImmediate(() => cb()) // No data needed on successful update
  }

  // Delete a bicycle record
  function del(id, cb) {
    if (!(db.hasOwnProperty(id))) {
      const err = Error('not found')
      err.status = 404
      return setImmediate(() => cb(err))
    }
    delete db[id]
    setImmediate(() => cb()) // No data needed on successful delete
  }
}

