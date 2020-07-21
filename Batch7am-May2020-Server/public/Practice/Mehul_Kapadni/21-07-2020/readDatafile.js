
var http = require("http");
// var url = require("url");
var fs = require("fs");

var server = http.createServer(function(request, response){
    fs.readFile('my-file.txt', function(err, data) {
        response.write(data);
        response.end();
    });
});

server.listen(8081, function(){
  console.log("Server is listening at 8081");
})