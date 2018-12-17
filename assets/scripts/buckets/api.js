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
        url: config.apiUrl + '/buckets/' + store.user.id, 
        method: 'PATCH',
        headers: {
            Authorization: 'Token token=' + store.user.token 
        },
        data: data  
    })
}

module.exports = {
    uploadBucket,
    deleteBucket,
    updateBucket
}