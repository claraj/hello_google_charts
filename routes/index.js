var express = require('express');
var router = express.Router();
var Cat = require('../models/cat');


/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Chart' });
});


router.post('/add', function(req, res, next){
    var cat = Cat(req.body);
    cat.save()
      .then( () => { res.redirect('/'); } )
      .catch((err) => { next(err);  });

});


module.exports = router;
