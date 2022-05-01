const ContatosServices = require("../services/ContatosServices");

module.exports = {
    listarContatos: (req, res) => {

        // Capturando o id do usuário logado
        let id = req.session.usuario.id;

        try {

            // Carregando os contatos do usuário
            let contatos = ContatosServices.carregar(id);
    
            // Enviando para a view
            res.render('contatos.ejs',{contatos});

        } catch (error) {

            // Enviando mensagem de erro para o visitante
            res.send(error);

        }
    }
}