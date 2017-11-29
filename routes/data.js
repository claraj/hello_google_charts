var express = require('express');
var router = express.Router();

var Cat = require('../models/cat');

/* get chart data */
router.get('/all', function(req, res, next){

  // query db. In this case, find all, return only age and cuteness fields.

  Cat.find().select( {age: 1, cuteness: 1} )
  .then( (docs) => {
    res.json(docs);
  }).catch( (err) => {
    next(err);
  });

});

module.exports  = router;
