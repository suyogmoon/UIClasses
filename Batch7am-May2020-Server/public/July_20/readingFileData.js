var http = require("http");
var fs = require("fs");

http.createServer(function(req, res){
    console.log("done")
    fs.readFile("sampledata.txt", function(err, data){
		res.write(data);
		res.end();
	});    
}).listen(8081, function(){
    console.log("Server is listing at 8081");
});

