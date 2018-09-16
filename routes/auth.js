var express = require('express');
var router = express.Router();
var db = require('../models');

router.get('/', function(req, res) {
    res.sendFile('auth.html', {root: 'public'});
});

router.post('/login', function(req, res) {
    db.User.findOne({
        where: {
            username: req.body.username,
            password: req.body.password
        }
    }).then(function(result){
        if (!result) {
            res.redirect('/auth');
        } else {
            res.redirect('/form');
        }
    });
});

router.post('/signup', function(req, res) {
    db.User.create({
        username: req.body.username,
        password: req.body.password
    }).then(function(result) {
        res.redirect('/form');
    }).catch(function(error) {
        res.json(error);
    });
});

module.exports = router;