// Importando o express
const express = require("express");

// Importando o ContatosController
const ContatosController = require("../controllers/ContatosController");

// Criando o roteador
const router = express.Router();

// Criando rota get para /contatos
router.get('/contatos', ContatosController.listarContatos);

// Exportando o roteador
module.exports = router;