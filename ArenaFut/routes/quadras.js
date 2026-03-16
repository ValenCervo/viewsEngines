var express = require('express');
var router = express.Router();

/* GET Quadras page */
router.get('/', function(req, res, next) {
  res.render('quadras', { title: 'Voce esta em Quadras'});
});


router.get('/agendamentos', function(req, res, next) {
  res.render('agendamentos', { title: 'Você está em Agendamentos'});
});

module.exports = router;