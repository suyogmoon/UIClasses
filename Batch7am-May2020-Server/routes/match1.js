var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
      var data = {
        between: 'England vs Westindies',
        matchType: 'TEST Series',
        location: 'Melborne',
        date: new Date(),
        des: 'Match 1'
      };

      data = JSON.stringify(data);
      setTimeout(function(){
        res.send(data);
      }, 7000);      
});

module.exports = router;
