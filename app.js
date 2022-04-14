// Importando express
const express = require('express');

// Importando roteadores
const UsuariosRouter = require("./routers/UsuariosRouter");

// Criando servidor e armazenando em app
const app = express();

// Configurando o ejs como template engine
app.set('view engine','ejs');

// Roteadores
app.use('/', UsuariosRouter);

// Rodando o servidor
app.listen(3000, ()=>{
    console.log("Servidor escutando na porta 3000")
});