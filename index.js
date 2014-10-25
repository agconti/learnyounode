// require the file system module
var fs = require('fs');
var path = require('path');
var filePath = process.argv[2];
var fileExt = process.argv[3];

// get the file
fs.readdir(filePath, function (err, list) {

    list.forEach(function(file){

        // check file extension
        if (path.extname(file) === "." + fileExt) {
            console.log(file);
        }

    });

});

