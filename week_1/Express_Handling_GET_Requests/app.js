var express = require('express'),
	app = express(), // Web Framework
	cons = require('consolidate'); // Template Library

//Configuracion
app.engine('html', cons.swig);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
//app.use(app.router);

//Manejador de errores internos del servidor
function errorHandler(err, req, res, next){
	console.error(err.message);
	console.error(err.stack);
	res.status(500);
	res.render('errror_template', { error: err });
}


app.use(errorHandler);

//Recibira como parametro el nombre
app.get('/:name', function(req, res, next){
	var name = req.params.name;
	
	//probando con querys
	var getvar1 = req.query.getvar1;
	var getvar2 = req.query.getvar2;
	
	res.render('hello', { name: name, getvar1 : getvar1, getvar2: getvar2});
});

app.listen(3000);
console.log('Express en el puerto 3000');

//http://localhost:3000/Paul?getvar1=Variable%201&getvar2=Variable%202