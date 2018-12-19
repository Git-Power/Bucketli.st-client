'use strict'

const store = require('../../store.js')

const limit = (owner) => {
  if (store.user._id === owner) {
    return true
  } else {
    return false
  }
}

module.exports = limit
