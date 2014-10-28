;(function(){

var net = require('net')
  , port = process.argv[2]
  , server 

// user strftime once you get internet
function getDate(){
    var date = new Date()
    return [ date.getFullYear() + '-'
           , ( date.getMonth() + 1 ) + '-'  
           , date.getDate() + ' ' 
           , date.getHours() + ":"
           , date.getMinutes()
           ].join("")
}

var server = net.createServer(function (socket) {
  // socket handling logic
  socket.end(getDate())
})
server.listen(port)

})()
