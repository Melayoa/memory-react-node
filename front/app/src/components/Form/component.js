import React from 'react';
import { Button, TextField } from '@material-ui/core';

import { FormWrapper, FormText, WinOrLoseBlock } from './styles';
import { sendScores } from '../../redux/actions';

export default function Form({ count, sendScores }) {
	const [value, setValue] = React.useState('');

	const handleChange = event => {
		setValue(event.target.value);
	};

	const renderWinningCase = () => (
		<WinOrLoseBlock>
			<FormText>Tu as mis {count} secondes, poste ton score !</FormText>
			<TextField autoFocus size='medium' margin='dense' label='Pseudo' value={value} onChange={handleChange} />
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
			{count < 120 ? renderWinningCase() : renderLostCase()}
		</FormWrapper>
	);
}