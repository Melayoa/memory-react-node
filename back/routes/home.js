const express = require('express');
const connection = require('../helpers/database.js');
const router = express.Router();

router.get('/', function (req, res, next) {
	connection.query('SELECT * FROM scores ORDER BY CAST(`score` AS UNSIGNED) ASC LIMIT 0, 8 ',
		function (error, results, fields) {
			if (error) { console.log("error : ", error) }
			else res.send(results);
		});
});


router.post('/add', function (req, res, next) {
	var score = req.body.score;
	var name = req.body.name;
	var sql = "INSERT INTO `memory_db`.`scores`(`user`,`score`) VALUES ('" + name + "','" + score + "')";

	return connection.query(sql, function (error, results, fields) {
		if (error) {
			console.log("error : ", error);
			res.sendStatus(500);
		}
		else {
			res.sendStatus(200)
		}
	});
})

module.exports = router;