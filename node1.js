var fs = require('fs');
var buf = fs.readFileSync(process.argv[2]); // test file passed in as arg.
var str = buf.toString();
var lines = str.split('\n');
console.log( lines.length - 1 );