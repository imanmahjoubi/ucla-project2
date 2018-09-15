var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
res.sendFile('../public/index.html');

});
router.get('/quiz', function(req, res) {
    res.render('index', { title: 'MyNutriadvisor' });


});

module.exports = router;
