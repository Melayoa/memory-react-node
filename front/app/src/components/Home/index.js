import React, { Component } from 'react';
import { HomeWrapper, StartButton } from './styles';
import { Button } from '@material-ui/core';

export default class Home extends Component {
	render() {
		return (
			<HomeWrapper>
				<StartButton>
					<Button variant="contained" color="secondary" href='/game'>Commencer à jouer</Button>
				</StartButton>
			</HomeWrapper>);
	}
}