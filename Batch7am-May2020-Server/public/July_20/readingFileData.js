var http = require("http");
var fs = require("fs");


http.createServer(function(req, res){
    console.log("done")
    fs.open("sampledata.txt", function(err, data){
        if (err) {
            console.log("error while reading data");
        } else {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
        }
        
        res.end();
    });


    
}).listen(8081, function(){
    console.log("Server is listing at 8081");
});

