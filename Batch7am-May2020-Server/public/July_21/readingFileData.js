var http = require("http");
var fs = require("fs");
var url = require("url");

http.createServer(function(req, res){
    var data = url.parse(req.url, true).query;
    data = JSON.stringify(data);

    /*fs.readFile("sampledata.txt", function(err, data){
		res.write(data);
		res.end();
    }); */
    // var data = "i got writtern into file";
    // fs.unlink("sample.txt", fun)
    fs.appendFile("empinfo.txt", data, function(err){
        if (err) {
            console.log("error wile writing file to content");
        } else {
            res.write("file data been added");
            res.end();
        }
    });
}).listen(8081, function(){
    console.log("Server is listing at 8081");
});

