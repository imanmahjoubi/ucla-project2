var express = require('express');
var router = express.Router();
var db = require('../models');

router.post('/', function(req, res) {
    db.Contact.create({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        message: req.body.message
    }).then(function(result) {
        if (result) {
            res.status(200);
            res.redirect('/')
        }
    }).catch(function(error) {
        res.status(404);
    });
});

module.exports = router;