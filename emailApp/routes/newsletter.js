var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('newsletter',{title: 'News Letter'});
});

router.post('/', function(req, res, next) {
    let email = req.body.email;
    req.assert('email', 'Email is required').notEmpty();
    var errors = req.validationErrors();
    if (errors) res.render('error', { message: 'Email should have a value', error: errors });
    else {
        fs.appendFile('./bin/subscribers.txt', email + '\n', function (err) {
            if (err) {
                render('error', {error: error});
            } else {
                res.redirect(307, '/thankyou');
            }
        });
    }
});

module.exports = router;
