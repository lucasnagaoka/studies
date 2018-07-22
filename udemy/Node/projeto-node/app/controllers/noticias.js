module.exports.noticias = (app, req, res) => {
    let connection = app.config.dbConnection();
    let noticiasModel = new app.app.models.noticiasDAO(connection);

    noticiasModel.getNoticias((error, result) => {
        res.render('noticias/noticias', { noticias: result });
    });
}

module.exports.noticia = (app, req, res) => {
    let connection = app.config.dbConnection();
    let noticiasModel = new app.app.models.noticiasDAO(connection);
    let id_noticia = req.query;

    noticiasModel.getNoticia(id_noticia, (error, result) => {
        res.render('noticias/noticia', { noticia: result })
    });
}