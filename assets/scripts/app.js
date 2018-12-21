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
  $('#upload-form').on('submit', bucketEvents.onUploadBucket)
  $('#get-my-buckets').on('click', bucketEvents.onGetMyBuckets)
  $('.content').on('click', '.delete-bucket', bucketEvents.onDeleteBucket)
  $('.content').on('click', '.update-bucket', bucketEvents.onUpdateBucket)
  $('#mag').on('click', bucketEvents.onSearchBuckets)
  $('#get-all-buckets').on('click', bucketEvents.onGetAllBuckets)

  $('.cls').click(function () {
    $('.auth-message').text('')
  })

  $('.navbar-brand').click(function () {
    $('#home-screen').show()
    $('#get-all').hide()
  })
})
