const express = require('express');
const connection = require('../helpers/database.js');
const router = express.Router();

router.get('/', function (req, res, next) {
	connection.query('SELECT * FROM scores',
		function (error, results, fields) {
			if (error) { console.log("error : ", error) }
			else res.send(results);
		});
});

module.exports = router;