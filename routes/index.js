var express = require('express');
var router = express.Router();
var db = require('../models');
var ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn;

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
    res.sendFile('index.html', {root: 'public'});

});

router.get('/quiz', function(req, res) {
  // res.sendFile(path.resolve('../public/q1.html'));
    console.log('*******************************************************');
    console.log(req.session.passport);
    db.Question.findAll({
        where: {
            id: 1
        }
    }).then(function(questionData) {
        console.log("Question data here");
        console.log(questionData);
        if (!questionData.length < 0) {

            return res.status(404);
        } else {
            var textObj = {
                id: questionData[0].id,
                text: questionData[0].text
            };
            //res.status(200);
            res.render('question', textObj);
            //console.log(questionData[0].text);
        }
    }).catch(function(error) {
        console.log("An error was triggered");
        console.log(error);
        res.status(404);
        return res.json(error);
    });

});

router.post('/quiz', function(req, res) {
    var questNum = parseInt(req.body.question);
    questNum++;
    console.log("QUestion number: ", questNum);
    db.Question.findAll({
        where: {
            id: questNum
        }
    }).then(function(questionData) {

        if (!questionData) {
            console.log('Question data not found, sending 404');
           return res.sendStatus(404);
        } else {
            console.log("Preparing text object");
            var textObj = {
                id: questionData[0].id,
                text: questionData[0].text
            };
            console.log("Text object");
            console.log(textObj);
            //res.status(200);
            //res.render('question', textObj)
            //console.log(questionData[0].text);
            res.json(textObj);
        }
    }).catch(function(error) {

        res.status(404);
        return res.json(error);
    });
});


module.exports = router;
