// require the file system module
var fs = require('fs');

// get the file
var buffer = fs.readFileSync(process.argv[2]);

// get number of new lines. 
// ( there is no new line at the end of the list, so -1) 
var numNewLines = buffer.toString().split("\n").length - 1;

console.log(numNewLines);
