var net = require('net')
var twoDigit = function(input){
    return (input < 10 ? '0' : '') + input;
};

var date = new Date();
var year = date.getFullYear();
var month = date.getMonth() + 1;
var day = date.getDate();
var hour = date.getHours();
var minutes = date.getMinutes();

var data = [year, twoDigit(month), twoDigit(day)].join('-') + " " + [twoDigit(hour), twoDigit(minutes)].join(":");

var server = net.createServer(function(socket){
    //socket logic
    socket.end(data.toString());
});
server.listen(Number(process.argv[2]));