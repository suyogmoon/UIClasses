var http = require("http");
var fs = require("fs");
var url = require("url");

var server = http.createServer(function(req, res){
    var data = url.parse(req.url, true).query;
    data = JSON.stringify(data);

    fs.appendFile("studentInfo.txt",data,function(err){
        if (err) {
            console.log("Error");
        } else {
            res.write("File Updated with Data");
            res.end();
        }
    });
});

server.listen(8081, function(){
    console.log("Server is listing at 8081");
});

