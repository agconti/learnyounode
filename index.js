// starts at two because we expect this program to always be
// run from the commandline in the format:
//
// `node programName.js [arguments]`
//
// therefore the first two items in process.argv can safely be skipped.

var i = 2, 
    argLength = process.argv.length,
    sum = 0;

for(; i<argLength; i++){
    sum += +process.argv[i];
}
console.log(sum);