// Imports des librairies
import React, { useState, useEffect, useRef } from 'react';

//imports des fichiers nécéssaires
import Board from '../components/Board';
import initializeDeck from './deck';
import Form from '../components/Form';

//Je crée un hook personnalisé pour créer mon intervalle
function useInterval(callback, delay) {
	//J'utilise le Hook useRef qui permet de sauvegarder ma callback pendant toute la durée de vie de mon composant
	const savedCallback = useRef();

	// Se souvenir de la dernière fonction de rappel.
	useEffect(() => {
		savedCallback.current = callback;
	});

	// Configurer l’intervalle.
	useEffect(() => {
		//utilisation de ma callback
		function tick() {
			savedCallback.current();
		}
		// Si on a bien un delai, je fais lance mon interval avec ma callback (tick) et lui donne le delai.
		if (delay !== null) {
			let id = setInterval(tick, delay);
			//permet d'arrêter l'interval
			return () => clearInterval(id);
		}
	}, [delay]);
}

export default function App() {
	//Je définis les propiétés de mon state INTERNE a mon composant avec le hook useState
	const [cards, setCards] = useState([])
	const [flipped, setFlipped] = useState([])
	const [solved, setSolved] = useState([]);
	const [disabled, setDisabled] = useState(false);
	const [count, setCount] = useState(0);
	// Cette constante contient un booléen (true ou false) suivant sii on est arrivé a 120 secondes où que l'on a trouvé les 20 carte
	const gameHasEnded = count === 120 || solved.length === 20
	// J'utilise mon hook perso, 1000 étant le delai (On veut incrémenter count toute les secondes)
	useInterval(() => {
		// Si j'ai finis le jeu je n'incrémente pas.
		if (gameHasEnded) return count;
		// Fonction setCount du hook useState que j'ai crée plus haut pour affecté une valeur a count
		//Ici le prend le count actuel et je lui rajoute 1
		setCount(count + 1);
	}, 1000);

	// Quand mon composant est monté j'initialise mes cartes (avec mon mélangeur de cartes) 
	useEffect(() => {
		setCards(initializeDeck())
	}, [])

	//Je préchargement de mes images (ligne 84)
	useEffect(() => {
		preloadImages()
	}, cards);

	//Je gère mon clic
	// Au clic la carte est désactivé et n'est plus clickable et je stock dans mon tableau flipped
	//Sinon, si j'ai retourné la carte avec le même id, je stock ma carte dans mon tables flipped
	// Si l'id est le même je mets les cartes dans mon tableau solved 
	//Sinon j'utilise noMatch qui retourne les cartes
	const handleClick = (id) => {
		setDisabled(true);
		if (flipped.length === 0) {
			setFlipped([id])
			setDisabled(false)
		}
		else {
			if (sameCardClicked(id)) return
			setFlipped([flipped[0], id])
			if (isMatch(id)) {
				setSolved([...solved, flipped[0], id]);
				resetCards();
			} else {
				noMatch();
			}
		}
	}
	// Je retourne mes cartes avec resetCards après 1 seconde
	const noMatch = () => {
		setTimeout(resetCards, 1000);
	}
	// Préchargement des images de mon tableau cards
	const preloadImages = () =>
		cards.map((card) => {
			const src = `../ressources/images/${card.type}.png`;
			new Image().src = src;
		})

	// C'est ici que l'on retourn les cartes en donnant un tableau vie au hook et on la rend clickable
	const resetCards = () => {
		setFlipped([]);
		setDisabled(false);
	}
	// On verifie que mon tableau contient l'id que je lui passe
	const sameCardClicked = (id) => flipped.includes(id);

	const isMatch = (id) => {
		// Je trouve la carte clické en cherchant le même id
		const clickedCard = cards.find((card) => card.id === id);
		// De même avec le premier élément de mon tableau flipped (la carte que je viens de retourner) et l'id 
		const flippedCard = cards.find((card) => flipped[0] === card.id);
		// Je vérifie qu'elles aient bien le même type, ce qui veut dire que c'est bien la même carte
		return flippedCard.type === clickedCard.type;
	}

	return (
		// Si le jeu n'est pas finis je retourne mon tableau de jeu en lui passant les props qu'il lui faut
		!gameHasEnded ?
			<div>
				<Board
					cards={cards}
					flipped={flipped}
					handleClick={handleClick}
					disabled={disabled}
					solved={solved}
				/>
				{count}
			</div>
			:
			// Si c'est finis je renvois mon composant Form 
			<Form count={count} />
	)
}