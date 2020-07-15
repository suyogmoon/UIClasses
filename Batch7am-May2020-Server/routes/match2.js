var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
      var data = {
        between: 'India vs Australia',
        matchType: 'T20 Series',
        location: 'Hyderabad',
        date: new Date(),
        des: 'Match 2'
      };

      data = JSON.stringify(data);
      setTimeout(function(){
        res.send(data);
      }, 3000);      
});

module.exports = router;
