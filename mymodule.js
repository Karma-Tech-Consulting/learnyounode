var fs = require('fs');

module.exports = function(file, filter, callback){
    var data = [];
    var lenExtension = filter.length * -1;
    dotIndex = lenExtension - 1;
    var str = fs.readdir(file, function(err, list){
        if(err)
            return callback(err)
            
        for(item in list){
            if(list[item].substr(dotIndex, 1) == "." && list[item].substr(lenExtension) == filter){
                data[data.length] = (list[item]);
            }
        }
        return callback(null, data);
    }); // test file passed in as arg.\\
};