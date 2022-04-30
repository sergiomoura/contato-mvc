const bcrypt = require('bcrypt');
const fs = require('fs');
const path = require('path');

module.exports = {
    renderCriarUsuario: (req, res) => {
        res.render('criarUsuario.ejs');
    },
    criarUsuario: (req, res) => {
        // Importando array de usuaários
        const usuarios = require('../database/usuarios.json');

        // Determinando o id do novo usuário
        let idNovo;
        if(usuarios.length == 0){
            idNovo = 1;
        } else {
            idNovo = usuarios[usuarios.length - 1].id + 1;
        }

        // Capturando nome, email e senha digitados pelo visitante no formulário
        const {nome, email, senha} = req.body;

        // Criptografando a senha digitada pelo visitante
        const senhaCriptografada = bcrypt.hashSync(senha, 10);

        // Organizando informações do usuário num objeto literal
        let usuario = {
            id: idNovo,
            email: email,
            nome: nome,
            senha: senhaCriptografada
        }

        // Adicionando usuário recém criado ao array de usuários
        usuarios.push(usuario);

        // Salvando array de usuários depois de acrescido o novo
        fs.writeFileSync(path.join(__dirname,'/../database/usuarios.json'), JSON.stringify(usuarios, null, 4))

        // Redirecionando o usuário para a rota /contatos
        res.send(usuario);
    },
    renderLogin: (req, res) => {
        res.render('login.ejs', {erro: 0, email:"", senha: ""});
    },
    login: (req, res) => {

        // Capturando email e senha digitados pelo usuário
        const {email, senha} = req.body;

        // Carregando array de usuários
        const usuarios = require('../database/usuarios.json');

        // Buscando usuário com o email digitado pelo visitante
        const usuario = usuarios.find( u => u.email == email)

        // Caso não encontre nenhum usuário, renderizando a view de login
        if(usuario == undefined){
            return res.render('login.ejs',{erro:1, email, senha});
        }

        // Validando a senha do usuário
        if(!bcrypt.compareSync(senha,usuario.senha)){
            return res.render('login.ejs',{erro:1, email, senha});
        }

        // Respondendo mensagem de sucesso para o visitante
        res.send("Login Ok");

    }
}