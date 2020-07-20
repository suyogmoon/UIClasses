var http = require("http");
var url = require("url");

var server = http.createServer(function(req, res){
    console.log(req.url);
    var data = url.parse(req.url, true).query;
    console.log(data);
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("<b>hello Mr " + data.name + " ur server is created</b>");
    res.end();
});

server.listen(8018, function(){
    console.log("server is listing at 8018");
});
