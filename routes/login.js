var express = require('express');
var router = express.Router();
const db = require('../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

router.get('/', function(req, res) {
    res.sendFile('login.html', {root: 'public'});
});

router.post('/submit', function(req, res) {
    db.User.findOne(({
        where: {
            username: req.body.username,
            password: req.body.password
        }
    })).then(function(result) {
        console.log(result);
        res.status(200);
        return res.json(result);
        // if (result === null) {
        //     res.status(200);
        //     return res.send('username not found');
        // }
    }).catch(function(error) {
        res.setMaxListeners(404);
        return res.json(error);
    });
});

module.exports = router;