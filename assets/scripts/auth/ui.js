const store = require('../store.js')

const signUpSuccess = function(data) {
    //we want to add a sign in function here so
    //you automatically get signed in when you sign up
    
}

const signUpFailure = function (error) {
   
}

const signInSuccess = function (data) {
    store.user = data.user
    
}

const signInFailure = function (error) {

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