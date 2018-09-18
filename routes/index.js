var express = require('express');
var router = express.Router();
var db = require('../models');

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
    res.sendFile('../public/index.html');

});

router.get('/quiz', function(req, res) {
  // res.sendFile(path.resolve('../public/q1.html'));
    db.Question.findAll({
        where: {
            id: 1
        }
    }).then(function(questionData) {
        if (!questionData) {
            window.alert('there was an error');
            return res.status(200);
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
        res.status(404);
        return res.json(error);
    });

});
router.post('/quiz', function(req, res) {
    var questNum = parseInt(req.body.question);
    questNum++;
    console.log(questNum);
    db.Question.findAll({
        where: {
            id: questNum
        }
    }).then(function(questionData) {
        if (!questionData) {
            window.alert('there was an error');
            return res.status(200);
        } else {
            var textObj = {
                id: questionData[0].id,
                text: questionData[0].text
            };
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
