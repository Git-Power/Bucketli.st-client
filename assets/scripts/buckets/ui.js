const store = require('../store.js')
const getAllBucketsTemplate = require('../templates/get-all.handlebars')
const getMyBucketsTemplate = require('../templates/get-my.handlebars')

const uploadBucketSuccess = function () {
    $('#message-change').text("Your bucket has been successfully uploaded")
    //instead of a written message
    //go to get all buckets for this user
    //show newest upload at "beginning" of uploads list
    document.getElementById('upload-form').reset()
    //user should be able to continue to make uploads until they
    //hit close button... then all new images appear at beginning
}

const uploadBucketFailure = function () {
    $('#message-change').text("There seems to be a problem. Please try again.")
    document.getElementById('upload-form').reset()
}

const getAllBucketsSuccess = function (data) {
    const getAllBucketsHtml = getAllBucketsTemplate({ buckets: data.buckets })
    $('#home-screen').hide()
    $('.gallery-all').html(getAllBucketsHtml)
    console.log("data is", data)
    console.log("data.buckets is", data.buckets)
}

const getAllBucketsFailure = function () {
    console.log("getAllBucketsFailure ran")
}

const getMyBucketsSuccess = function (data) {
    const getMyBucketsHtml = getMyBucketsTemplate({ buckets: data.buckets })
    $('#home-screen').hide()
    $('.gallery-all').html(getMyBucketsHtml)
    console.log("data is", data)
    console.log("data.buckets is", data.buckets)
}

const getMyBucketsFailure = function (data) {
    
}

const deleteBucketSuccess = function () {
    //make individual image disappear
    //move other images "forward" in list by refreshing handlebars
    //

}

const deleteBucketFailure = function () {
    $('#message').text("Sorry, we were unable to delete your bucket.")
    //there is no 

}

const updateBucketSuccess = function () {

}

const updateBucketFailure = function () {

}

module.exports = {
    uploadBucketSuccess,
    uploadBucketFailure,
    getAllBucketsSuccess,
    getAllBucketsFailure,
    getMyBucketsSuccess,
    getMyBucketsFailure,
    deleteBucketSuccess,
    deleteBucketFailure,
    updateBucketSuccess,
    updateBucketFailure
}