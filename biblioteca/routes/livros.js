var express = require('express');
var router = express.Router();

/* GET livros listing. */
router.get('/', function(req, res, next) {
  res.render('Seja Bem-vindo a sua biblioteca!');
});
//Renderizar é melhor do que o send, pois ele e mais prático
//se fosse escrito router.get('/livros', function...) seria uma sub-rota de outra rota existente

module.exports = router;