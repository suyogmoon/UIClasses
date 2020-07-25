 var express = require("express");
 var router = express.Router();

 router.post('/', function(req, res){
 	// console.log(req.query);
 	console.log(req.body);
 	var data = {
 		msg: ""
 	};

 	if (req.body.id == 'admin' && req.body.password == 'india123') {
 		data.msg = "Valid";
 	} else {
 		data.msg = 'Invalid';
 	}
 	data = JSON.stringify(data);
 	res.send(data);
 });

module.exports = router;
