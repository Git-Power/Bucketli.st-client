'use strict'

const store = require('../../store.js')

const limit = (user_id) => {
  if (store.user.id === user_id) {
    return true
  } else {
    return false
  }
}

module.exports = limit
