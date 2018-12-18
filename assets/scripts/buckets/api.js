const config = require ('../config.js')
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

const deleteBucket = function() {
    return $.ajax({
        url: config.apiUrl + '/buckets/' + store.user.id, 
        method: 'DELETE',
        headers: {
            Authorization: 'Token token=' + store.user.token 
        } 
    })
}

const updateBucket = function(data) {
    return $.ajax({
        url: config.apiUrl + '/buckets/' + /*image id*/,
        method: 'PATCH',
        headers: {
            Authorization: 'Token token=' + store.user.token 
        },
        data: data  
    })
}

const getAllBuckets = function () {
    console.log("api.getAllBuckets ran")
        return $.ajax({
            url: config.apiUrl + '/buckets',
            method: 'GET',
            headers: {
                Authorization: 'Token token=' + store.user.token 
            },
          })
}


module.exports = {
    uploadBucket,
    deleteBucket,
    updateBucket,
    getAllBuckets
}