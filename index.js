;(function(){
  var http = require('http')
    , url = require('url')
    , strftime = require('strftime')

  http.createServer(function (req, res) {

    var parms = url.parse(req.url, true)

    switch (parms.pathname) {

      case '/api/parsetime':
        res.writeHead(200, { 'Content-Type': 'application/json' })

        var date = new Date(parms.query.iso)
          , jsonResponse = {
                "hour": date.getHours()
              , "minute": date.getMinutes()
              , "second": date.getSeconds()
            }
        
        res.end(JSON.stringify(jsonResponse))
        break
      
      case '/api/unixtime':
        res.writeHead(200, { 'Content-Type': 'application/json' })
         var date = new Date(parms.query.iso)
          , jsonResponse = {"unixtime": date.getTime()}
        res.end(JSON.stringify(jsonResponse))
        break

      default:
        res.writeHead(404, { 'Content-Type': 'application/text' })
        res.end("Not Found")
        
    }

  }).listen(Number(process.argv[2]))

})()
