// Importar o express
const express = require('express');

// Importar o UsuariosController
const UsuariosController = require('../controllers/UsuariosController');

// Criar o roteador
const router = express.Router();

// Criar a rota no roteador
router.get('/registrar', UsuariosController.showRegistrar);
router.post('/usuarios', UsuariosController.store);
router.get('/login', UsuariosController.mostrarLogin);

// Exportar o roteador para uso externo.
module.exports = router;