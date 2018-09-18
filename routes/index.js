var express = require('express');
//var router = express.Router();
var exphbs = require("express-handlebars");
var path = require('path');
var bodyParser = require('body-parser');
var app = express();



app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var tst ={
    title: 'nutirition',
    count : 1
};
var count = 1;

/* GET home page. */
app.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
res.sendFile('../public/index.html');

});

app.get('/quiz', function(req, res) {
  // res.sendFile(path.resolve('../public/q1.html'));
    res.render("q1",tst);

});
app.post('/quiz', function(req, res) {
    // res.sendFile(path.resolve('../public/q1.html'));
     tst.count++;
     var count= "q"+tst.count;
     console.log('question: ',tst.count);
     console.log('data: ',req.body);
    res.render(count,tst);


});


module.exports = app;
