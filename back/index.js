// J'importe les routes que j'ai besoin
const homeRouter = require('./routes/home.js');

// Je déclare les librairies nécessaires au fonctionnement de mon application 
const bodyParser = require('body-parser');
const morgan = require('morgan');
const express = require('express');
// Je définis mon app
const app = express();
const cors = require('cors');

// Je configure l'application
// Permet d'avoir les logs des erreurs du serveur
morgan('combined', {
  skip: function (req, res) { return res.statusCode < 400 }
})
// Activation des cors
app.use(cors());
// extended false signifie que l'objet contient clé-valeurs où la valeur peut être une string ou un array
app.use(bodyParser.urlencoded({ extended: false }));
//parse json
app.use(bodyParser.json());
//Définis les fichiers statiques dans /public
app.use(express.static(__dirname + '/public'));
//Ajout des headers que l'on accapte
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
  next();
});

// définition de la route
// ici la route est /scores, les routes de ce module seront disponibles
// sur l'url de base /scores. 
// Cela signifie que '/' === '/scores'
app.use('/scores', homeRouter);


// Partie API
// dans le cas d'une route non trouvée, je retourne le code 404 'Not Found'
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

//je lance le serveur node
let server = app.listen(process.env.PORT || 5000, function () {
  console.log('Listening on port ' + server.address().port);
});