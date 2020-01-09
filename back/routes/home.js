// Définition des librairies et fichiers utilisés
const express = require('express');
const connection = require('../helpers/database.js');
const router = express.Router();

// Je crée une route qui utilise la méthode GET sur la route / qui en réalité est /scores (voir index.js)
router.get('/', function (req, res, next) {
	//Je fais une requête à ma BDD
	//Ici je lui demande de prendre les éléments de ma table scores et je le trie en ascendant 
	//pour avoir les scores du plus petit au plus grand (plus rapide, meilleur tu es)
	// et enfin je limite la requête aux 8 premiers scores.
	connection.query('SELECT * FROM scores ORDER BY CAST(`score` AS UNSIGNED) ASC LIMIT 0, 8 ',
		function (error, results, fields) {
			if (error) { console.log("error : ", error) }
			//J'envoie la réponse
			else res.send(results);
		});
});
// Je crée une route qui utilise la méthode POST sur la route /add donc accessible sur /scores/add (voir index.js)
router.post('/add', function (req, res, next) {
	// Les paramètres que j'ai passé à ma méthode sont disponibles dans le body de la requête
	// le premier paramètre de notre fonction étant req, qui équivaut à la requête je récupère score et name
	// avec req.body.monparam
	var score = req.body.score;
	var name = req.body.name;
	//Je peux aussi définir ma requête SQL avant de la passer à la fonction de connexion, cela permet une meilleure visibilité.
	var sql = "INSERT INTO `memory_db`.`scores`(`user`,`score`) VALUES ('" + name + "','" + score + "')";

	return connection.query(sql, function (error, results, fields) {
		if (error) {
			console.log("error : ", error);
			//J'envoie une 500 au client en cas d'erreur
			res.sendStatus(500);
		}
		else {
			//J'envoie une 200 dans le cas d'un succès ! 
			res.sendStatus(200)
		}
	});
})

//J'exporte mon module
module.exports = router;