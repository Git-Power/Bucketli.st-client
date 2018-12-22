const store = require('../store.js')
const bucketEvents = require('../buckets/events.js')

const signUpSuccess = function (data) {
  $('#message-up').text('Signed up successfully')
  $('#sign-up-form')[0].reset()
}

const signUpFailure = function () {
  $('#message-up').text('There has been an error, please try again.')
}

const signInSuccess = function (data) {
  store.user = data.user
  $('#sign-in').modal('toggle')
  $('#homescreen-jpg').css('filter', 'blur(0px)')
  $('#message-up').text('')
  bucketEvents.onGetAllBuckets()
}

const signInFailure = function () {
  $('#message-in').text('Something went wrong. Please try again.')
}

const signOutSuccess = function (data) {
  $('.auth-message').text('')
  $('#sign-up').modal()
  $('#home-screen').show()
  $('#homescreen-jpg').css('filter', 'blur(7px)')
  $('#sign-in-form')[0].reset()
  $('.content').hide()
}

const changePasswordSuccess = function (data) {
  $('#message-password').text('Changed password successfully')
}

const changePasswordFailure = function () {
  $('#message-password').text('Password is incorrect')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  changePasswordSuccess,
  changePasswordFailure
}
