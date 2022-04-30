// Importando express
const express = require('express');

// Importando o express-session
const session = require('express-session');

// Importando roteadores
const UsuariosRouter = require("./routers/UsuariosRouter");
const ContatosRouter = require("./routers/ContatosRouter");

// Criando servidor e armazenando em app
const app = express();

// Configurando o middleware que carrega sessions a partir do cookie, caso haja.
app.use(session({
    secret: "SEGREDO",
    resave: false,
    saveUninitialized: false
}))

// Interpretando os formulários que vierem via post com enctype www/x-form-urlencoded 
app.use(express.urlencoded({ extended: false }));

// Configurando o ejs como template engine
app.set('view engine','ejs');

// Roteadores
app.use('/', UsuariosRouter);
app.use('/', ContatosRouter);

// Rodando o servidor
app.listen(3000, ()=>{
    console.log("Servidor escutando na porta 3000")
});