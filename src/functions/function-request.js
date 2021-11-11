const request = require('request');

exports.Request = (url, method) => {
    return new Promise(( resolve, reject ) => {
        request({url, method, json: true }, (err, res, body) => {
            if(!err){
                resolve({res, body, err})
            } else {
                reject({res, body, err})  
            }
        })
    })
}