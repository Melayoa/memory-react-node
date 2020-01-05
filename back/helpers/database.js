const mysql = require('mysql');
const connection = mysql.createConnection({
	multipleStatements: true,
	host: 'localhost',
	port: '3306',
	user: 'root',
	password: 'root',
	database: 'memory_db'
});

connection.connect((err) => {
	if (!err) {
		console.log('Database is connected');
	} else {
		console.log('No connection with database', err);
	}
});

module.exports = connection;