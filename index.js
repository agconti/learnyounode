// require the file system module
var fs = require('fs');

// get the file
fs.readFile(process.argv[2], 'utf-8', function (err, data) {
    
    // get number of new lines. 
    // ( there is no new line at the end of the list, so -1) 
    var numNewLines = data.split("\n").length - 1;

    // return answer to console
    console.log(numNewLines); 
});

