var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('reserva', { title: 'Reserve um livro!' });
});

/* GET home page. */
router.get('/categoriaromance', function(req, res, next) {
  res.render('categoriaromance', { title: 'Reserve um livro!' });
});

module.exports = router;
