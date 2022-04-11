const bcrypt = require('bcrypt');
const fs = require('fs');
const path = require('path');

module.exports = {
    showRegistrar:(req,res) => {
        res.render('registro.ejs');
    },
    store: (req, res) => {
        
        // Capturar as informações que o usuário digitou
        let {nome, email, senha} = req.body;

        // Importar o array de usuários
        let usuarios = require('../database/usuarios.json');

        // Determinar o novo idNovo do usuário
        let idNovo = usuarios[usuarios.length - 1].id + 1;

        // Criar a senha criptografada!
        let senhaCriptografada = bcrypt.hashSync(senha, 10);
        
        // Criar um objeto com os dados do usuário.
        let usuario = { 
            "id": idNovo,
            "nome": nome,
            "email": email,
            "senha": senhaCriptografada
        }

        // Adicionar o novo usuário a este array
        usuarios.push(usuario);

        // Salvar este array no arquivo usuarios.json
        fs.writeFileSync(path.join(__dirname,'/../database/usuarios.json'), JSON.stringify(usuarios, null, 4));

        // Direcionando o usuário para a rota GET /contatos
        res.redirect('/contatos');
    },
    mostrarLogin: (req,res) => {
        res.render('login.ejs')
    },
    login: (req, res) => {

        // Extrair/Capturar o email e a senha digitadas pelo usuário
        let {email, senha} = req.body;
        /**
         * Equivale a:
         * let email = req.body.email;
         * let senha = req.body.senha;
         */


        // Carregar o meu array de usuários
        const usuarios = require('../database/usuarios.json');

        // Veririficar se o email existe e se a senha deste email confere.
        // res.send({email, senha, usuarios});
        let usuario = usuarios.find(
            u => u.email == email && bcrypt.compareSync(senha,u.senha)
        )

        if(usuario === undefined){
            // Se o usuário não for encontrado ou senha for inválida,
            // Mandar view de login, com dados para mostrar o erro.
            return res.render("login.ejs", {erro:1,email,senha});
        } 
        
        // Se o usuário OK: 
        // - Setar session do usuário
        req.session.usuario = usuario;

        // - redirecionar o usuário para a tela que lista contatos
        res.redirect("/contatos");


    }
}