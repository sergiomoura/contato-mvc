
const ContatosServices = {
    carregar: id => {

        // Determinando o caminho do arquivo
        var file = `../database/contatos_${id}.json`;

        // Tentando carregar o arquivo de contatos
        try {

            // Retornando conteúdo JSON do arquivo 
            return require(file);
        
        } catch (error) {

            // Emitindo erro caso falhe
            throw('Falha ao carregar arquivo de contatos')

        }
        
    }
}

module.exports = ContatosServices;