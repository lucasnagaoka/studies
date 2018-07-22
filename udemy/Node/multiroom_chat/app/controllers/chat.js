module.exports.iniciaChat = (application, req, res) => {
    let dadosForm = req.body;

    req.assert('apelido', 'Nome ou apelido é obrigatório.').notEmpty();
    req.assert('apelido', 'Nome ou apelido deve conter entre trës e quinze caracteres.').len(3, 15);

    let erros = req.validationErrors();

    if (erros) {
        res.render('index', { validacao: erros });
        return;
    }

    application.get('io').emit('msgParaCliente', { apelido: dadosForm.apelido, mensagem: ' acabou de entrar no chat' });

    res.render('chat', { dadosForm: dadosForm });
}