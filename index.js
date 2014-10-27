;(function(){

// require the http module
var http = require('http')
  , url1 = process.argv[2]
  , url2 = process.argv[3]
  , url3 = process.argv[4]

var urlArr = [ url1
             , url2
             , url3 ]

function logResults(err, responseBody){

    if (err) { console.error(err) }

    console.log(responseBody)
}

function callback(response){
    
    // set response body as a closure
    var responseBody = ''
    
    // set response to string instead of buffer
    response.setEncoding('utf8')

    // data:event
    response.on('data', function(chunk){
       responseBody += chunk    
    })

    // log errors to the console
    response.on('error', console.error)

    // call the logResults callback once 
    // the server is finsihed responding
    response.on('end', function(){
        logResults(null, responseBody)
        
        // now that the server is finsihed
        // invoke the next call 
        var url = urlArr.shift()
        if (url){
            http.get(url, callback)
        }
    })
}

http.get(urlArr.shift(), callback)

})()
