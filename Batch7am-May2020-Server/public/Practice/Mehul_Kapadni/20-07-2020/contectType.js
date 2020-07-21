
var http = require("http");
var url = require("url");

var server = http.createServer(function(request, response){
    var data = url.parse(request.url, true).query;
    console.log(data);
    response.writeHead(200, {"Content-type":"text/html"});
    response.write("<b>Successfully Server is Created </b>");
    response.end();
});


server.listen(8081, function(){
  console.log("Server is listening at 8081");
})