var http = require("http");
var fs = require("fs");

var server = http.createServer(function(req, res){
    fs.readFile("sampledata.txt", function(err, data){
        res.write(data);
        res.end();
    })
});

server.listen(8081, function(){
    console.log("Server is listing at 8081");
});