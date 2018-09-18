var express = require('express');
var router = express.Router();
var db = require('../models');

router.post('/', function(req, res) {
    db.Contact.create({
        firstname: req.body.first-name,
        lastname: req.body.last-name,
        email: req.body.email,
        message: req.body.message
    }).then(function(result) {
        if (result) {
            res.status(200);
            return res.json(result);
        }
    })
})