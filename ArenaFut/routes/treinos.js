var express = require('express');
var router = express.Router();

/* GET home page */
router.get('/', function(req, res, next) {
  res.render('Treinos', { title: 'Você está na página Treinos'});
});

router.get('/professoresdetreino', function(req, res, next) {
  res.render('Professoresdetreino', { title: 'Você está na página Treinos'});
});
module.exports = router;