;(function(){
  var http = require('http')
    , fs = require('fs')

  http.createServer(function (req, res) {

    // respond with a status + content type
    res.writeHead(200, { 'content-type': 'text/plain' })
    
    // read the file and pipe the response to the client
    fs.createReadStream(process.argv[3]).pipe(res)
  }).listen(process.argv[2])
  
})()
