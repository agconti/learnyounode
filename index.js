// require the file system module
var df = require('./dirFilter');
var filePath = process.argv[2];
var fileExt = process.argv[3];

// call directory filter
df(filePath, fileExt, function (err, list) {

    if (err){
        console.error("Woah: ", err);
    }
    
    list.forEach(function(file){
        console.log(file);
    });
});


