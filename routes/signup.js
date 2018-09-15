var express = require('express');
var router = express.Router();
const db = require('../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

router.get('/', function(req, res) {
    res.sendFile('signup.html', {root: 'public'});
});

router.post('/', function(req, res) {
    db.User.create(req.body).then(function(result) {
        res.status(200);
        return res.json(result);
    }).catch(function(error) {
        res.setMaxListeners(404);
        return res.json(error);
    });
});

module.exports = router;