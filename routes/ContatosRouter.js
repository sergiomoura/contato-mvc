// Importar o express
const express = require("express");

// Importar o ContatosController
const ContatosController = require('../controllers/ContatosController');

// Cria o roteador
const router = express.Router();

// Pede para o roteador definir uma rota: (método: get, endereço: /contatos)
router.get('/contatos', ContatosController.listarContatos);
router.get('/contatos/:id', ContatosController.capturarContato);

// Exportar o roteador
module.exports = router;