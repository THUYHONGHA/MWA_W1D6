var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
  res.render('thankyou',{email: req.body.email, title: 'News Letter'});
});


module.exports = router;