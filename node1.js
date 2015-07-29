var total = 0;
for(var i = 0, len = process.argv.length; i < len; i++){
    if(i >= 2){
        total += Number(process.argv[i]);
    }
}

console.log(total);