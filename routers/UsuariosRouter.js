// Importando dependências;
const express = require("express")
const UsuariosController = require('../controllers/UsuariosControllers');

// Criando roteador
const router = express.Router();

// Criando rota get para '/registrar'
router.get('/registrar', UsuariosController.renderCriarUsuario);
router.post('/usuarios', UsuariosController.criarUsuario);
router.get('/login',UsuariosController.renderLogin)
router.post('/login',UsuariosController.login)
// Exportando o roteador
module.exports = router;
