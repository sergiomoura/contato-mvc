// Importar dependências
const express = require('express');
const session = require('express-session');

// Importar os roteadores
const UsuariosRouter = require('./routes/UsuariosRouter');
const ContatosRouter = require('./routes/ContatosRouter');

// Importar os middlewares
const marcaEntradaDaRequisicao = require('./middlewares/marcaEntradaDeRequisicao');

// Criar um servidor/aplicação com o express
const app = express();

// Configurar o EJS como seu template engine
app.set('view engine','ejs');

// Configura o req.body para conter as informações
// digitadas pelo usuário no formulário
app.use(express.urlencoded({ extended: false }));

// Configurando a pasta public para arquivos estáticos
app.use(express.static('public'));

// Configurando o uso da session
app.use(session({
    secret:"segredo",
    resave: false,
    saveUninitialized: false
}))


// Aplicando middleware globais
app.use(marcaEntradaDaRequisicao);

// Criar rota get no endereço '/' para responder requisição com msg "olá"
app.get('/', (req, res)=>{
    res.send("Olá");
});

// Usando os roteadores
app.use('/', UsuariosRouter);
app.use('/', ContatosRouter);

// Levantar/rodar/executar a nossa aplicação
app.listen(3000, ()=>{console.log("Aplicação escutando a porta 3000")} );

