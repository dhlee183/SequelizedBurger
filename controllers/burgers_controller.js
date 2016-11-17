var models  = require('../models');
var express = require('express');
var router  = express.Router();


router.get('/', function(req, res) {
  models.Burger.findAll({
    include: [ models.User ]
  })
  .then(function(burgers) {
    res.render('burgers/index', {
      burgers: burgers
    })
  })
});

router.post('/create', function (req, res) {
  models.Burger.create({
    burger_name: req.body.burger_name,
    devoured: req.body.devoured,
  })
  .then(function() {
    res.redirect('/');
  })
});

router.put('/update/:id', function(req,res) {
  models.Burger.update(
  {
    devoured: req.body.devoured
  },
  {
    where: { id : req.params.id }
  })
  .then(function (result) {
    res.redirect('/');
  })
});

module.exports = router;