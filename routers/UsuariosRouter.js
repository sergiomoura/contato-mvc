// Importando dependências;
const express = require("express")
const UsuariosController = require('../controllers/UsuariosControllers');

// Criando roteador
const router = express.Router();

// Criando rota get para '/registrar'
router.get('/registrar', UsuariosController.renderCriarUsuario);

// Exportando o roteador
module.exports = router;
