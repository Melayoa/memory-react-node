import React from 'react';
import { HomeWrapper, StartButton } from './styles';
import { Button } from '@material-ui/core';

export default function Home() {
	return (
		<HomeWrapper>
			<StartButton>
				<Button variant="contained" color="secondary" href='/game'>Commencer à jouer</Button>
			</StartButton>
		</HomeWrapper>);
}