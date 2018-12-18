'use strict'

const store = require('../../store.js')

const limit = (_id) => {
  if (store.user._id === _id) {
    return true
  } else {
    return false
  }
}

module.exports = limit
