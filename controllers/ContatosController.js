// Para testes, assumindo que o usuário logado é o usuário de id=1;
const uid = 1;

module.exports = {

    listarContatos: (req, res)=>{

        // Importar os contatos do usuário:
        let contatos = require(`../database/contatos_${uid}.json`);

        // Enviando a view para o cliente
        res.render('home.ejs');

    },

    capturarContato: (req, res) => {

        // Importar os contatos do usuário:
        let contatos = require(`../database/contatos_${uid}.json`);

        // Descobrir o ID do contato que o usuário quer...
        let idDoContato = req.params.id;

        // Encontrar no array de contatos o contato que tem o id desejado.
        let contato = contatos.find(
            (c) => {
                return c.id == idDoContato;
            }
        );

        // Retorar o contato para o cliente OU
        // uma msg erro se o contato não existir
        if(contato === undefined){
            res.send({msg: "O contato inexistente"});
        } else {
            res.send(contato);
        }

    }

}
