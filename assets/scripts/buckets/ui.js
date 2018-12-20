const store = require('../store.js')
const getAllBucketsTemplate = require('../templates/get-all.handlebars')
const getMyBucketsTemplate = require('../templates/get-my.handlebars')
const showSearchTemplate = require('../templates/get-search.handlebars')

const uploadBucketSuccess = function () {
  $('#message-change').text('Your bucket has been successfully uploaded')
  document.getElementById('upload-form').reset()
}

const uploadBucketFailure = function () {
  $('#message-change').text('There seems to be a problem. Please try again.')
  document.getElementById('upload-form').reset()
}

const getAllBucketsSuccess = function (data) {
  const getAllBucketsHtml = getAllBucketsTemplate({ buckets: data.buckets.reverse() })
  $('.content').html(getAllBucketsHtml)
  $('#home-screen').fadeOut(1000)
  $('.content').hide().fadeIn(1250)
  $('#get-all').show()
}

const getAllBucketsFailure = function () {
}

let userBuckets = []

const getMyBucketsSuccess = function (data) {
  const getMyBucketsHtml = getMyBucketsTemplate({ buckets: data.buckets.reverse() })
  userBuckets = data.buckets.filter(bucket => bucket.owner === store.user._id)

  if (userBuckets.length === 0) {
    $('.content').text("You do not have any buckets yet. Please upload some buckets!")
  } else
  {
    $('.content').html(getMyBucketsHtml)
    $('#home-screen').fadeOut(1000)
    $('.content').hide().fadeIn(1250)
    $('#get-all').show()
  }
}

const getMyBucketsFailure = function (data) {
  $('.content').text("We were unable to retrieve your buckets. Please try again.")
}

const deleteBucketFailure = function () {
  $('#message').text('Sorry, we were unable to delete your bucket.')
}

const updateBucketSuccess = function () {

}

const updateBucketFailure = function () {

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
