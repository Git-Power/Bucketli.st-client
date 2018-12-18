'use strict'

const authEvents = require('./auth/events.js')
const bucketEvents = require('./buckets/events.js')
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // your JS code goes here
  $('#sign-up').modal('show')
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('#change-password-form').on('submit', authEvents.onChangePassword)
  $('.cls').click(function() {
    $('.auth-message').text('')
  })
  $('#upload-form').on('submit', bucketEvents.onUploadBucket)
  $('#get-my-buckets').on('click', bucketEvents.onGetAllBuckets)
  //Get All Buckets functions attached to get my bucket button, just for now
  //$('#').on('submit', bucketEvents.onGetAllBuckets)
  $('#delete-bucket').on('click', bucketEvents.onDeleteBucket)
  $('#update-bucket').on('submit', bucketEvents.onUpdateBucket)
})
