/* importar as configurações do servidor */
var app = require('./config/server');

/* parametrizar a porta de escuta */
let port = 8080;

app.listen(port, function(){
	console.log(`Servidor online na porta ${port}`);
})