// Importar o express
const express = require("express");

// Importar o ContatosController
const ContatosController = require('../controllers/ContatosController');

// Importar middlewares
const verificaAdimplencia = require('../middlewares/verificaAdimplencia');

// Cria o roteador
const router = express.Router();

// Pede para o roteador definir uma rota: (método: get, endereço: /contatos)
router.get('/contatos', verificaAdimplencia, ContatosController.listarContatos);
router.get('/contatos/:id', verificaAdimplencia, ContatosController.capturarContato);

// Exportar o roteador
module.exports = router;