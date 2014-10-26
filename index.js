// require the file system module
var http = require('http')
var url = process.argv[2]

function callback(response){
    
    // set response to string instead of buffer
    response.setEncoding('utf8')

    // data:event
    response.on('data', function(chunk){
        console.log(chunk)
    })

    // log errors to the console
    response.on('error', console.error)
}

http.get(url, callback)