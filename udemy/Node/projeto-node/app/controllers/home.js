module.exports.index = (app, req, res) => {

    let connection = app.config.dbConnection();
    let noticiasModel = new app.app.models.noticiasDAO(connection);

    noticiasModel.getLastFiveNews((error, result) => {
        console.log(result);
        res.render('home/index', { noticias: result });
    });
}