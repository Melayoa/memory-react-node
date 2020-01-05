const express = require('express');
const connection = require('../helpers/database.js');
const router = express.Router();

router.post('/add-score', function (req, res, next) {
	const score = req.body.score;
	const name = req.body.name;
	const sql = "INSERT INTO `memory_db`.`scores`(`user`,`score`) VALUES ('" + name + "','" + score + "')";

	connection.query(sql, function (error, results, fields) {
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