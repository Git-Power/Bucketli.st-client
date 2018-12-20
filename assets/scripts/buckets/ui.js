const store = require('../store.js')
const getAllBucketsTemplate = require('../templates/get-all.handlebars')
const getMyBucketsTemplate = require('../templates/get-my.handlebars')
const showSearchTemplate = require('../templates/get-search.handlebars')

const uploadBucketSuccess = function () {
  $('#message-change').text('Your bucket has been successfully uploaded')
  // instead of a written message
  // go to get all buckets for this user
  // show newest upload at "beginning" of uploads list
  document.getElementById('upload-form').reset()
  // user should be able to continue to make uploads until they
  // hit close button... then all new images appear at beginning
}

const uploadBucketFailure = function () {
  $('#message-change').text('There seems to be a problem. Please try again.')
  document.getElementById('upload-form').reset()
}

const getAllBucketsSuccess = function (data) {
  const getAllBucketsHtml = getAllBucketsTemplate({ buckets: data.buckets.reverse() })
  $('#home-screen').fadeOut(1000)
  $('.content').html(getAllBucketsHtml)
  $('.content').hide().fadeIn(3250)
  console.log(data)
}

const getAllBucketsFailure = function () {
  console.log('getAllBucketsFailure ran')
}

let userBuckets = []

const getMyBucketsSuccess = function (data) {
  console.log('data is', data)
  console.log('data.buckets is', data.buckets)
  const getMyBucketsHtml = getMyBucketsTemplate({ buckets: data.buckets.reverse() })
  // create data object of buckets owned by store.user.id:
  //create new array which is all the elements of the data.buckets array
  //where data.buckets.owner === store.user.id
  
  userBuckets = data.buckets.filter(bucket => bucket.owner === store.user._id)

  console.log("userBuckets is", userBuckets)
  if (userBuckets.length === 0) {
    $('.content').text("You do not have any buckets yet. Please upload some buckets!")
    
  } else
  {
    $('.content').html(getMyBucketsHtml)
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
