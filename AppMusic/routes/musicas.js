var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('musicas', { title: 'Bem vindo ao AppMusic!' });
});

router.get('/pop', function(req, res, next) {
  res.render('pop', { title: 'Bem vindo ao AppMusic!' });
});


module.exports = router;
