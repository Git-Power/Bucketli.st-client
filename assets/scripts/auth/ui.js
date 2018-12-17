const store = require('../store.js')

const signUpSuccess = function(data) {
    $('#message-up').text('Signed up successfully')
    $('#message-up').removeClass()
    $('#message-up').addClass('success')
    console.log('signUpSuccess ran. Data is :', data)
    //we want to add a sign in function here so
    //you automatically get signed in when you sign up
    
}

const signUpFailure = function (error) {
    $('#message-up').text('Please Use A Valid E-mail')
    $('#message-up').removeClass()
    $('#message-up').addClass('failure')
    // console.error('signUpFailure ran. Error is :', error)
}

const signInSuccess = function (data) {
    // console.log(data.user)
    store.user = data.user
    $('#sign-in').modal('toggle')
}

const signInFailure = function (error) {
    $('#message-up').text('Wrong E-mail or Password')
    $('#message-up').removeClass()
    $('#message-up').addClass('failure')
    console.error('signInFailure ran. Error is :', error)
}

module.exports = {
    signUpSuccess,
    signUpFailure,
    signInSuccess,
    signInFailure
    // signOutSuccess,
    // changePasswordSuccess,
    // changePasswordFailure,

}