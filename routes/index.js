var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'My Nutri-Advisor' });
    res.sendFile('.. /public/index.html')
});

module.exports = router;
