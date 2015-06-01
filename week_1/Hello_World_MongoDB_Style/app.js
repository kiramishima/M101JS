var MongoClient = require("mongodb").MongoClient;

//Abrimos la conexion al server
MongoClient.connect('mongodb://localhost:27017/names', function(err, db) {
	if(err) throw err;
	
	//Buscamos un documento en nuestra coleccion
	db.collection('user').findOne({}, function(err, doc){
		if(err) throw err;
		
		//Imprimimos el Resultado
		console.dir(doc);
		
		//cerramos la DB
		db.close();
	});
	
	//Declaramos exitoso
	console.dir("Called findOne");
});