var http = require('http'),
    request = [],
    dataStrings = {},
    orderOfServerInputs = [];
var completeResponses = [];
for(server in process.argv){
    if(server >= 2){
        
        orderOfServerInputs[orderOfServerInputs.length] = process.argv[server].substr(-4);
        request[request.length] = function(thisServer){
            http.get(process.argv[server], function(response){
                response.on("data", function(data){
                    dataStrings[thisServer.substr(-4)] = dataStrings[thisServer.substr(-4)] ? dataStrings[thisServer.substr(-4)] : ''; //if not set set to ''
                    dataStrings[thisServer.substr(-4)] += data.toString();
                });
                response.on("end", function(data){
                    completeResponses[completeResponses.length] = true;
                    if(completeResponses.length > 2){
                        for(item in orderOfServerInputs){
                            serverNo = orderOfServerInputs[item].substr(-4)
                            console.log(dataStrings[serverNo]);
                        }
                    }
                });
            }); 
        }(process.argv[server]);
    }
}