import React, { useState, useEffect, useRef } from 'react'

import Board from '../components/Board';
import initializeDeck from './deck';
import Form from '../components/Form';

function useInterval(callback, delay, count, solved) {
	const savedCallback = useRef();

	// Se souvenir de la dernière fonction de rappel.
	useEffect(() => {
		savedCallback.current = callback;
	});

	// Configurer l’intervalle.
	useEffect(() => {
		function tick() {
			savedCallback.current();
		}
		if (delay !== null) {
			let id = setInterval(tick, delay);

			return () => clearInterval(id);
		}
	}, [delay]);
}

export default function App() {
	const [cards, setCards] = useState([])
	const [flipped, setFlipped] = useState([])
	const [solved, setSolved] = useState([]);
	const [disabled, setDisabled] = useState(false);
	const [count, setCount] = useState(0);
	const gameHasEnded = count === 120 || solved.length === 20

	useInterval(() => {
		if (gameHasEnded) return count
		setCount(count + 1);
	}, 1000, count, solved);

	useEffect(() => {
		setCards(initializeDeck())
	}, [])

	useEffect(() => {
		preloadImages()
	}, cards);

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

	const noMatch = () => {
		setTimeout(resetCards, 1000);
	}

	const preloadImages = () =>
		cards.map((card) => {
			const src = `/img/${card.type}.png`;
			new Image().src = src;
		})


	const resetCards = () => {
		setFlipped([]);
		setDisabled(false);
	}

	const sameCardClicked = (id) => flipped.includes(id);

	const isMatch = (id) => {
		const clickedCard = cards.find((card) => card.id === id);
		const flippedCard = cards.find((card) => flipped[0] === card.id);
		return flippedCard.type === clickedCard.type;
	}

	return (
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
			<Form count={count} />
	)
}