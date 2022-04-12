module.exports = (req, res, next) => {

    // Verificar se a req é de um usuário logado
    // em outras palavras, verifica se
    // req.session.usuario == undefined
    if(req.session.usuario == undefined){
        return res.redirect('/login');
    } else {

        // Usuário está logado!
        // Pegar as info da session e guardar direto na req.
        req.usuario = req.session.usuario;
    
        // Ir adiante para o próximo middleware ou controller
        next();
    }


}