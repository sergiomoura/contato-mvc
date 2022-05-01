// Importando o express
const express = require("express");

// Importando o middlewares
const VerificaSeLogado = require("../middlewares/VerificaSeLogado");

// Importando o ContatosController
const ContatosController = require("../controllers/ContatosController");

// Criando o roteador
const router = express.Router();

// Criando rota get para /contatos e protegendo seu acesso somente para autenticados
router.get('/contatos', VerificaSeLogado, ContatosController.listarContatos);

// Exportando o roteador
module.exports = router;