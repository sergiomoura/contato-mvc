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
    }
}