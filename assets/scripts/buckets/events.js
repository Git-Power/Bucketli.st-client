//const getFormFields = require('../../../lib/get-form-fields.js') 
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

const onDeleteBucket = function () {
    event.preventDefault()
    console.log()
    api.deleteBucket() 
    .then(ui.deleteBucketSuccess)
    .catch(ui.deleteBucketFailure)
}

const onUpdateBucket = function (event) {
    event.preventDefault()
    console.log(event)
    const data = new FormData(event.target)
   
    api.updateBucket(data) 
    .then(ui.uploadBucketSuccess)
    .catch(ui.uploadBucketFailure)
}

module.exports = {
    onUploadBucket,
    onDeleteBucket,
    onUpdateBucket

}