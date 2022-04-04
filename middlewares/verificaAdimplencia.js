// TODO: Supondo que o usuário é o de uid=1
let uid = 3;

module.exports = (req, res, next) => {

    // Importar os usuários
    const usuarios = require('../database/usuarios.json');

    // Capturar o usuário de id==uid
    const usuario = usuarios.find(u => u.id == uid);

    // Verificar se o usuario é adimplente
    if(usuario.adimplente){
        // Caso adimplente: Pode ir adiante.
        next();
    } else {
        // Caso contrário, enviar uma mensagem de erro educada
        res.send("Favor entrar em contato com o nosso financeiro.")
    }

}