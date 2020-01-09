//J'importe les librairies dont j'ai besoin
import axios from 'axios';
// Je crée une instance qui me permet de lui donner l'url de mon api 
// Je peux aussi lui passer les headers que je veux passer pour chaque requêtes
// Par exemple pour lui passer un Token d'identification
const instance = axios.create({
	baseURL: 'http://localhost:5000',
	headers: {}
});

// Je crée mon appel GET a http://localhost:5000/scores qui est une requête asynchrone
// On exporte les fonctions afin de les utiliser ensuite dans les sagas qui lanceras l'appel.
export const getScores = async () => {
	try {
		// j'appelle avec la méthode get la route /scores
		const response = await instance.get('/scores');
		//Je retourne la reponse
		return response;
	}
	//si j'ai une erreur, je renvois l'erreur
	catch (error) {
		return error;
	}
}

// Je crée mon appel GET a http://localhost:5000/scores/add qui est une requête asynchrone
// Je lui passe les paramêtres que j'ai besoin d'envoyer: {name, score}
export const putScores = async (data) => {
	try {
		const response = await instance.post('/scores/add', { name: data.name, score: data.score });
		return response;
	}
	// Si j'ai une erreur je renvois l'erreur
	catch (error) {
		return error;
	}
}