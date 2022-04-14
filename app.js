// Importando express
const express = require('express');

// Criando servidor e armazenando em app
const app = express();

// Criando rota get para '/' que responde "Olá"
app.get('/',(_req,res)=>{res.send("Olá!")});

// Rodando o servidor
app.listen(3000, ()=>{
    console.log("Servidor escutando na porta 3000")
});