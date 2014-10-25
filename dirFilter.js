// require the file system module
var fs = require('fs');
var path = require('path');


var directoryFilter = function(filePath, fileExt, callback){

    fs.readdir(filePath, function (err, list) {

        // return error if any
        if (err){
            return callback(err);
        }

        var filteredList = list.filter(function(file){

            // check file extension
            return path.extname(file) === "." + fileExt; 

        });

        callback(null, filteredList);
    });
};

module.exports = directoryFilter;
