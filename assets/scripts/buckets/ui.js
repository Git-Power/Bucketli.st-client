const store = require('../store.js')
const getAllBucketsTemplate = require('../templates/get-all.handlebars')
const getMyBucketsTemplate = require('../templates/get-my.handlebars')
const showSearchTemplate = require('../templates/get-search.handlebars')

const uploadBucketSuccess = function () {
  $('#message-change').text('Your bucket has been successfully uploaded')
  document.getElementById('upload-form').reset()
  $('#navbarDropdown').fadeOut(100).fadeIn(500).fadeOut(100).fadeIn(500)
}

const uploadBucketFailure = function () {
  $('#message-change').text('There seems to be a problem. Please try again.')
  document.getElementById('upload-form').reset()
}

const getAllBucketsSuccess = function (data) {
  const getAllBucketsHtml = getAllBucketsTemplate({ buckets: data.buckets })
  $('.content').html(getAllBucketsHtml)
  $('#home-screen').fadeOut(1000)
  $('.content').hide().fadeIn(1250)
  $('#get-all').show()
  console.log(data)
}

const getAllBucketsFailure = function () {
  console.log('getAllBucketsFailure ran')
}

const getMyBucketsSuccess = function (data) {
  console.log('data.buckets is', data.buckets)
  const getMyBucketsHtml = getMyBucketsTemplate({ buckets: data.buckets })
  $('.content').html(getMyBucketsHtml)
  $('#home-screen').fadeOut(1000)
  $('.content').hide().fadeIn(1250)
  $('#get-all').show()
}

const getMyBucketsFailure = function (data) {

}

const deleteBucketFailure = function () {
  $('#message').text('Sorry, we were unable to delete your bucket.')
}

const updateBucketSuccess = function () {
  $('#navbarDropdown').fadeOut(100).fadeIn(500).fadeOut(100).fadeIn(500)
  $('.collapse').collapse('hide')
}

const updateBucketFailure = function () {
  $('.add-site-message').text('There seems to be a problem. Please try again.')
}

let results = { resultsarr: [] }

const searchResultsVisual = () => {
  $('#home-screen').hide()
  $('#get-all').show()
  const showBucketsHtml = showSearchTemplate({
    resultsarr: results.resultsarr
  })
  $('.content').hide().fadeIn(500)
  $('.content').html(showBucketsHtml)
}

const searchBucketsSuccess = (data) => {
  results = { resultsarr: [] }
  const input = $('#searchbar').val()
  // api data and incoming data should be lowercased before comparing
  data.buckets.filter(function (el) {
    if (el.tags) {
      if (el['tags'].includes(input)) {
        results.resultsarr.push(el)
      } else {
        console.log('No match')
      }
    }
  })
  searchResultsVisual()
}

const searchBucketsFailure = () => {
  $('#searchbar').val('Something went wrong. :(')
}

module.exports = {
  uploadBucketSuccess,
  uploadBucketFailure,
  getAllBucketsSuccess,
  getAllBucketsFailure,
  getMyBucketsSuccess,
  getMyBucketsFailure,
  deleteBucketFailure,
  updateBucketSuccess,
  updateBucketFailure,
  searchBucketsSuccess,
  searchBucketsFailure
}
