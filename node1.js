var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
    //socket logic
    var src = fs.createReadStream(process.argv[3]);
    src.pipe(res);
});
server.listen(Number(process.argv[2]));