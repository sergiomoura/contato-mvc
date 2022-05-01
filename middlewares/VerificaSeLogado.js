module.exports = (req, res, next) => {

    // Verificando se a session usuário existe
    if(req.session.usuario == undefined) {
        
        // Redirecionando visitante para login
        return res.redirect('/login');

    }

    // Passando a execução do próximo middleware
    next();
    
}