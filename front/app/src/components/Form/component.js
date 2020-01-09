import React from 'react';
import { Button, TextField } from '@material-ui/core';

import { FormWrapper, FormText, WinOrLoseBlock } from './styles';

// Composant Form
export default function Form({ count, sendScores }) {
	// State interne qui me permet de mettre la valeur que l'utilisateur tape dans le champ
	const [value, setValue] = React.useState('');
	// Je set la valeur 
	const handleChange = event => {
		setValue(event.target.value);
	};

	//L'utilisateur à gagner : je lui affiche un formulaire afin qu'il rentre son pseudo pour qu'il poste son score 
	const renderWinningCase = () => (
		<WinOrLoseBlock>
			<FormText>Tu as mis {count} secondes, poste ton score !</FormText>
			<TextField autoFocus size='medium' margin='dense' label='Pseudo' value={value} onChange={handleChange} />
			{/* sendScore dispatch mon action */}
			<Button variant='contained' href='/scores' color='primary' onClick={() => sendScores(value, count)}>poster</Button>
		</WinOrLoseBlock>
	)

	const renderLostCase = () =>
		<WinOrLoseBlock>
			<FormText>Tu as perdu ! </FormText>
			<Button variant='contained' color='secondary' href='/game' >Try again</Button>
		</WinOrLoseBlock>

	return (
		<FormWrapper>
			{/* Si le count est en dessous de 120 alors je renvois le jsx présent dans renderWinningCase sinon, celui dans renderLostCase */}
			{count < 120 ? renderWinningCase() : renderLostCase()}
		</FormWrapper>
	);
}