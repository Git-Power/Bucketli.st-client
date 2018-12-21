const store = require('../store.js')
const bucketEvents = require('../buckets/events.js')

const signUpSuccess = function(data) {
    $('#message-up').text('Signed up successfully')
    $('#message-up').removeClass()
    $('#message-up').addClass('success')
    $('#sign-up-form')[0].reset()
}

const signUpFailure = function (error) {
    $('#message-up').text('There has been an error, please try again.')
    $('#message-up').removeClass()
    $('#message-up').addClass('failure')
}

const signInSuccess = function (data) {
    store.user = data.user
    $('#sign-in').modal('toggle')
    $('#homescreen-jpg').css('filter', 'blur(0px)')
    bucketEvents.onGetAllBuckets()
}


const signInFailure = function (error) {
    $('#message-up').text('Wrong E-mail or Password')
    $('#message-up').removeClass()
    $('#message-up').addClass('failure')
}

const signOutSuccess = function (data) {
    $('#sign-up').modal()
    $('#home-screen').show()
    $('#homescreen-jpg').css('filter', 'blur(7px)')
    $('#sign-in-form')[0].reset()
}

const changePasswordSuccess = function (data) {
    $('#message-password').text('Changed password successfully')
}

const changePasswordFailure = function (error) {
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