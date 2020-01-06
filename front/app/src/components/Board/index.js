import React from 'react';
import { BoardWrapper, CardWrapper } from './styles';
import Card from './Card';
import ProgressBar from './ProgressBar';

export default function Board({ disabled, cards, flipped, solved, handleClick }) {
	return (
		<BoardWrapper>
			<CardWrapper>
				{cards.map((card) => (
						<Card
							key={card.id}
							id={card.id}
							type={card.type.image}
							flipped={flipped.includes(card.id)}
							solved={solved.includes(card.id)}
							handleClick={handleClick}
							disabled={disabled || solved.includes(card.id)}
							{...card}
						/>
					)
				)}
			</CardWrapper>
			<ProgressBar />
		</BoardWrapper>
	);
}