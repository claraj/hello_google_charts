var express = require('express');
var router = express.Router();

var Cat = require('../models/cat');

/* get chart data */
router.get('/all', function(req, res, next){

  // query db. In this case, find all. But could also return only (for example) age and cuteness fields.

  Cat.find()   //.select( {age: 1, cuteness: 1} )   // select only certain fields if the entire document is not needed. 
  .then( (docs) => {
    res.json(docs);
  }).catch( (err) => {
    next(err);
  });

});

module.exports  = router;
