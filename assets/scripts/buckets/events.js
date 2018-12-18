const getFormFields = require('../../../lib/get-form-fields.js') 
const api = require('./api.js')
const ui = require('./ui.js')

const onUploadBucket = function (event) {
    event.preventDefault()
    console.log(event)
    const form = new FormData(event.target)
    console.log("event.target is", event.target)
    console.log("form is", form)
    api.uploadBucket(form) 
    .then(ui.uploadBucketSuccess)
    .catch(ui.uploadBucketFailure)
}

const onDeleteBucket = function (event) {
    event.preventDefault()
    console.log(event)
    const bucketId = $(event.target).closest('section').data('id')
    api.deleteBucket(bucketId) 
    .then(() => onGetAllBuckets(event))
    .catch(ui.deleteBucketFailure)
}

const onUpdateBucket = function (event) {
    event.preventDefault()
    console.log(event)
    const data = {}
    data.tags = $(event.target).closest('form').find('textarea').val()
    data.id = $(event.target).closest('section').data('id')   
    api.updateBucket(data) 
    .then(ui.uploadBucketSuccess)
    .catch(ui.uploadBucketFailure)
}

const onGetAllBuckets = function () {
    //event.preventDefault()
    console.log("events.onGetAllBuckets ran")
    api.getAllBuckets() 
    .then(ui.getAllBucketsSuccess)
    .catch(ui.getAllBucketsFailure)
}

const onGetMyBuckets = function () {
    api.getAllBuckets() 
    .then(ui.getMyBucketsSuccess)
    .catch(ui.getMyBucketsFailure)
}

module.exports = {
    onUploadBucket,
    onDeleteBucket,
    onUpdateBucket,
    onGetAllBuckets,
    onGetMyBuckets
}