const express = require('express');
const router = express.Router();
const db = require('../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

//Questions
//Do not need create, update, or delete functionality
//READ all questions
router.get('/questions', function(req, res) {
    db.Question.findAll({}).then(function(result) {
        res.status(200);
        return res.json(result);
    }).catch(function(error) {
        res.status(404);
        return res.json(error);
    });
});

//READ by id
router.get('/questions/id/:id', function(req, res) {
    db.Question.findAll({}).then(function(result) {
        res.status(200);
        return res.json(result);
    }).catch(function(error) {
        res.status(404);
        return res.json(error);
    });
});

//READ questions by category
router.get('/questions/:category', function(req, res) {
    db.Question.findAll({
        where: {
            CategoryId: req.params.category
        }
    }).then(function(result) {
        res.status(200);
        return res.json(result);
    }).catch(function(error) {
        res.status(404);
        return res.json(error);
    });
});

//Articles

//READ articles by 
router.get('/articles/category/:category', function(req, res) {
    db.Article.findAll({
        where: {
            CategoryId: req.params.category
        }
    }).then(function(result) {
        res.status(200);
        return res.json(result);
    }).catch(function(error) {
        res.status(404);
        return res.json(error);
    });
});

//READ all articles by RecommendationId(foreign key)
router.get('/articles/rec/:id', function(req, res) {
    db.Article.findAll({
        where: {
            RecommendationId: req.params.id
        }
    }).then(function(result) {
        res.status(200);
        return res.json(result);
    }).catch(function(error) {
        res.status(404);
        return res.json(error);
    });
});

//READ all articles
router.get('/articles', function(req, res) {
    db.Article.findAll({}).then(function(result) {
        res.status(200);
        return res.json(result);
    }).catch(function(error) {
        res.status(404);
        return res.json(error);
    });
});
//=========================================================================
//=========================================================================
//Users

//READ all users
router.get('/users', function(req, res) {
    db.User.findAll({}).then(function(result) {
        res.status(200);
        return res.json(result);
    }).catch(function(error){
        res.status(404);
        return res.json(error);
    });
});

//READ user by ID
router.get('/users/id/:id', function(req, res) {
    db.User.findOne({
        where: {
            id: req.params.id
        }
    }).then(function(result) {
        res.status(200);
        return res.json(result);
    }).catch(function(error) {
        res.status(404);
        return res.json(error);
    });
});

//READ user by username (unique field)
router.get('/users/username/:username', function(req, res) {
    console.log('------------------------------------------------------------------')
    var foundUser = null;
    var recommendationsObject = {};
    db.User.findAll({
            where: {
                username: req.params.username
            }
        }).then(function(user) {
             foundUser = user[0];
            db.Recommendation.findAll({
                include : {
                    model: db.Food
                },
                where: {
                    [Op.and]: {
                        [Op.and]: {
                            min_score: {
                                [Op.lte]: foundUser.score_diet
                            },
                            max_score: {
                                [Op.gte]: foundUser.score_diet
                            }
                        },
                        CategoryId: 1
                    }
                }
            }).then(function(recDiet) {
                recommendationsObject.diet = recDiet;
                db.Recommendation.findAll({
                    include: {
                        model: db.Food
                    },
                    where: {
                        [Op.and]: {
                            [Op.and]: {
                                min_score: {
                                    [Op.lte]: foundUser.score_energy
                                },
                                max_score: {
                                    [Op.gte]: foundUser.score_energy
                                }
                            },
                            CategoryId: 4
                        }
                    }
                }).then(function(recEnergy) {
                    recommendationsObject.energy = recEnergy;
                    db.Recommendation.findAll({
                        include: {
                            model: db.Food
                        },
                        where: {
                            [Op.and]: {
                                [Op.and]: {
                                    min_score: {
                                        [Op.lte]: foundUser.score_habit
                                    },
                                    max_score: {
                                        [Op.gte]: foundUser.score_habit
                                    }
                                },
                                CategoryId: [2, 3]
                            }
                        }
                    }).then(function(recHabit) {
                      
                            recommendationsObject.habit = recHabit;
                            console.log(recommendationsObject);
                            res.render('thankyou', { recommendations: recommendationsObject} );
    
                    }).catch(function(err) {
                        
                        return res.status(500);
                    });
                }).catch(function(err) {
                return res.status(500);
                });
            }).catch(function(error) {
                return res.status(500);
            });
        }).catch(function(error) {
            return res.status(500);
        }); 
});



//CREATE new user
router.put('/users', function(req, res) {
    var recObj = {
        "diet": [],
        "energy": [],
        "habit" : []
    };
    db.User.update(req.body, {
        where: {
            username: req.body.username
        }
    }).then(function(result) {
        db.Recommendation.findAll({
            include : {
                model: db.Food
            },
            where: {
                [Op.and]: {
                    [Op.and]: {
                        min_score: {
                            [Op.lte]: req.body.score_diet
                        },
                        max_score: {
                            [Op.gte]: req.body.score_diet
                        }
                    },
                    CategoryId: 1
                }
            }
        }).then(function(recDiet) {
            recObj.diet = recDiet;
            db.Recommendation.findAll({
                include: {
                    model: db.Food
                },
                where: {
                    [Op.and]: {
                        [Op.and]: {
                            min_score: {
                                [Op.lte]: req.body.score_energy
                            },
                            max_score: {
                                [Op.gte]: req.body.score_energy
                            }
                        },
                        CategoryId: 4
                    }
                }
            }).then(function(recEnergy) {
                recObj.energy = recEnergy;
                db.Recommendation.findAll({
                    include: {
                        model: db.Food
                    },
                    where: {
                        [Op.and]: {
                            [Op.and]: {
                                min_score: {
                                    [Op.lte]: req.body.score_habit
                                },
                                max_score: {
                                    [Op.gte]: req.body.score_habit
                                }
                            },
                            CategoryId: [2, 3]
                        }
                    }
                }).then(function(recHabit) {
                    db.User.findOne({
                        where: {
                            username: req.body.username
                        }
                    }).then(function(data) {
                        recObj.habit = recHabit;
                        var bulkCreateArray = [];
                        for (var i = 0; i < recObj.diet.length; i++) {
                            bulkCreateArray.push({RecommendationId: recObj.diet[i].id, UserId: data.id});
                        }
                        for (var i = 0; i < recObj.habit.length; i++) {
                            bulkCreateArray.push({RecommendationId: recObj.habit[i].id, UserId: data.id});
                        }
                        for (var i = 0; i < recObj.energy.length; i++) {
                            bulkCreateArray.push({RecommendationId: recObj.energy[i].id, UserId: data.id});
                        }
                        console.log(bulkCreateArray);
                        db.UserRecommendation.bulkCreate(bulkCreateArray).then(function(newUserRecs) {
                            console.log(newUserRecs);
                            console.log(recObj);
                            res.status(200);
                            return res.json(recObj);
                            //return res.render('thankyou', recObj);
                        }).catch(function(error) {
                            res.status(404);
                            return res.json(error);
                        });
                    }).catch(function(error) {
                        res.status(404);
                        return res.json(error);
                    })
                }).catch(function(err) {
                    res.status(404);
                    return res.json(err);
                });
            }).catch(function(err) {
                res.status(404);
                return res.json(err);
            });
        }).catch(function(error) {
            res.status(404);
            return res.json(error);
        });
    }).catch(function(error) {
        return res.json(error);
    }); 
});

//READ
//view column names
//will be necessary when loading questions onto template
router.get('/users/view_columns', function(req, res) {
    db.sequelize.query('SHOW COLUMNS FROM users').then(function(result){
        res.status(200);
        return res.json(result);
    }).catch(function(error) {
        res.status(404);
        return res.json(error);
    });
});

//UPDATE user
router.put('/users/id/:id', function(req, res) {
    db.User.update(req.body, {
        where: {
            id: req.params.id
        }
    }).then(function(result) {
        res.status(200);        
        return res.json(result);
    }).catch(function(error) {
        res.status(404);
        return res.json(error);
    });
});

//DELETE
router.delete('/users/:id', function(req, res) {
    db.User.destroy({
        where: {
            id: req.params.id
        }
    }).then(function(result) {
        res.status(200);
        return res.json(result);
    }).catch(function(error) {
        res.status(404);
        return res.json(result);
    });
});

//UserRecommendations

//CREATE new record
router.post('/userrecommendations', function(req, res) {
    console.log(req.params.rec_id, req.params.user_id);
    db.UserRecommendation.create({
        RecommendationId: req.body.RecommendationId,
        UserId: req.body.UserId
    }).then(function(result) {
        res.status(200);
        return res.json(result);
    }).catch(function(error) {
        res.status(404);
        return res.json(error);
    });
});

// router.get('/userrecommendations/:username', function(req, res) {
//     return res.render('thankyou', recObj);
// });

module.exports = router;