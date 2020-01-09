//Je déclare la librairie mysql que je vais utiliser pour me connecter a ma base de donnée
const mysql = require('mysql');
//J'utilise createConnection de la librairie mysql afin de définir mes paramètres de connexion
const connection = mysql.createConnection({
	multipleStatements: true,
	host: 'localhost',
	port: '3306',
	user: 'root',
	password: 'root',
	database: 'memory_db'
});
// Quand je me connecte je fais un log sur mon terminal pour connaître l'état de ma base de donnée
connection.connect((err) => {
	if (!err) {
		//Je suis connecté
		console.log('Database is connected');
	} else {
		//Oups il y a une erreur, et on affiche l'erreur pour pouvoir debugger.
		console.log('No connection with database', err);
	}
});
//J'exporte mon module afin de pouvoir l'utiliser
module.exports = connection;