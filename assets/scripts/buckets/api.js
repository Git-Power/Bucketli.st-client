const config = require('../config.js')
const store = require('../store.js')

const uploadBucket = function (form) {
  const data = form
  return $.ajax({
    url: config.apiUrl + '/buckets',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data,
    contentType: false,
    processData: false
  })
}

const deleteBucket = function (bucketId) {
  return $.ajax({
    url: config.apiUrl + '/buckets/' + bucketId,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateBucket = function (data) {
  return $.ajax({
    url: config.apiUrl + '/buckets/' + data.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      bucket: {
        tags: data.tags
      }
    }
  })
}

const getAllBuckets = function () {
  return $.ajax({
    url: config.apiUrl + '/buckets',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  uploadBucket,
  deleteBucket,
  updateBucket,
  getAllBuckets
}
