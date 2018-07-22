class NoticiasDAO {
    constructor (connection) {
        this._connection = connection;
    }

    getNoticias(callback) {
        this._connection.query('SELECT * FROM noticias ORDER BY data_criacao DESC', callback);
    }

    getNoticia(id_noticia, callback) {
        this._connection.query(`select * from noticias where id_noticia = ${id_noticia.id_noticia}`, callback);
    }

    salvarNoticia(noticia, callback) {
        console.log(noticia);
        this._connection.query('INSERT INTO noticias SET ?', noticia, callback);
    }

    getLastFiveNews(callback) {
        this._connection.query('SELECT * FROM noticias ORDER BY data_criacao DESC LIMIT 5', callback)
    }
}

module.exports = () => {
    return NoticiasDAO;
}