import React, { Component } from 'react';
import { CardWrapper, Card } from './styles';
import cards from '../../business/CardsImages';

export default class Cards extends Component {
	render() {
		return (
			<CardWrapper>
				{cards.map(card => <Card src={card} />)}
			</CardWrapper>
		);
	}
}