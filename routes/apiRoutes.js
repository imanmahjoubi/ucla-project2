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

//CREATE new user
router.post('/users', function(req, res) {
    var recObj = {
        "diet": [],
        "energy": [],
        "habit" : []
    };
    db.User.create(req.body).then(function(result) {
        db.Recommendation.findAll({
            include : {
                model: db.Food
            },
            where: {
                [Op.and]: {
                    [Op.and]: {
                        min_score: {
                            [Op.lte]: result.score_diet
                        },
                        max_score: {
                            [Op.gte]: result.score_diet
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
                                [Op.lte]: result.score_energy
                            },
                            max_score: {
                                [Op.gte]: result.score_energy
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
                                    [Op.lte]: result.score_habit
                                },
                                max_score: {
                                    [Op.gte]: result.score_habit
                                }
                            },
                            CategoryId: [2, 3]
                        }
                    }
                }).then(function(recHabit) {

                    recObj.habit = recHabit;
                    console.log(recObj);
                    res.status(200);
                    return res.json(recObj);
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
            res.json(error);
        });
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

module.exports = router;