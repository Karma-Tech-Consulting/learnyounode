var fs = require('fs');

var file =  process.argv[2];
var extension = process.argv[3];
var lenExtension = extension.length * -1;
dotIndex = lenExtension - 1;

var str = fs.readdir(file, function(err,
 list){
    for(item in list){
        if(list[item].substr(dotIndex, 1) == "." && list[item].substr(lenExtension) == extension)
        console.log(list[item]);
    }
    
}); // test file passed in as arg.
