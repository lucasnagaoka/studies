module.exports.formulario_inclusao_noticia = (app, req, res) => {
    res.render('admin/form_add_noticia', {validacao : {}, noticia: {}})
}

module.exports.noticias_salvar = (app, req, res) => {
    let noticia = req.body;

        req.assert('titulo', 'Título é obrigatório').notEmpty();
        req.assert('resumo', 'Resumo é obrigatório').notEmpty();
        req.assert('resumo', 'Resumo deve conter entre 10 e 100 caracteres').len(10, 100);
        req.assert('autor', 'Autor é obrigatório').notEmpty();
        req.assert('data_noticia', 'Data é obrigatória').notEmpty(); //.isDate({ format: 'YYYY-MM-DD' })
        req.assert('noticia', 'Notícia é obrigatória').notEmpty();

        let erros = req.validationErrors();

        if (erros) {
            res.render('admin/form_add_noticia')
            return
        }

        let connection = app.config.dbConnection();
        let noticiasModel = new app.app.models.noticiasDAO(connection);

        noticiasModel.salvarNoticia(noticia, (error, result) => {
            res.redirect('/noticias');
        });
}