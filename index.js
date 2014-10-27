;(function(){
// require the file system module
var http = require('http')
    , url = process.argv[2]
    , responseBody = ""



function logResults(){
    console.log(responseBody.length)
    console.log(responseBody)
}

function callback(response){
    
    // set response to string instead of buffer
    response.setEncoding('utf8')

    // data:event
    response.on('data', function(chunk){
       responseBody += chunk
    })

    // log errors to the console
    response.on('error', console.error)

    // log results once the server is finsihed
    response.on('end', logResults)
}

http.get(url, callback)
})()
