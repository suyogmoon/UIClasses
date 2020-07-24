
var express = require("express");

var router = express.Router();

router.get('/' , function(req, res){
    console.log("am frm sample js file")
    var data = {};
    data.msg = "Hello its our first web service";

    data = JSON.stringify(data);
    res.send(data);
});

module.exports = router;