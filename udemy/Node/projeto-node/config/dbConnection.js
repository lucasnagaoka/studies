const mysql = require('mysql');

let connMySQL = () => {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'portal_noticias'
    });
}

module.exports = () => {
    return connMySQL;
}
