;(function(){
  var http = require('http')
    , map = require('through2-map')

  http.createServer(function (req, res) {

     if (req.method != 'POST') {
        return res.end('Only post requests are accpted\n')
      }
    
    req.pipe(map(function (chunk) {
      return chunk.toString().toUpperCase()
    })).pipe(res)
  
  }).listen(Number(process.argv[2]))

})()
