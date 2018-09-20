var db = require("../models");
var express = require('express');
var router = express.Router();
var passport = require('passport');

// router.get('/', (req, res) => {
//     res.render('index', { user : req.user });
// });

// router.get('/signup', (req, res) => {
//     res.render('register', { });
// });
router.get('/', function(req, res) {
  
  res.sendFile('auth.html', {root: 'public'});
});

router.post('/signup', (req, res, next) => {
    console.log('hi from post to register');
    console.log(req.body);
    db.User.create({
        username: req.body.username,
        password: req.body.password
    }).then(function() {
        passport.authenticate('local')(req, res, () => {
            req.session.save((err) => {
                if (err) {
                    return next(err);
                }
                res.redirect('/');
            });
        });
    }).catch(function(err) {
        return res.render('register', { error : err.message });
    }); 
});


// router.get('/login', (req, res) => {
//     res.render('login', { user : req.user });
// });

router.post('/login', passport.authenticate('local', { failureRedirect: '/auth' }), (req, res, next) => {
    req.session.save((err) => {
        if (err) {
            return next(err);
        }
        console.log('-----------------------------------------------------');
        console.log(req.user.username);
        console.log(req.session.passport);
        res.redirect('/');
    });
});

// router.get('/logout', (req, res, next) => {
//     req.logout();
//     req.session.save((err) => {
//         if (err) {
//             return next(err);
//         }
//         res.redirect('/');
//     });
// });

router.get('/ping', (req, res) => {
    res.status(200).send("pong!");
});

module.exports = router;
