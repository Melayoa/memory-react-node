import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { ScoresWrapper, ScoreTable } from './styles';
import { Button, Typography } from '@material-ui/core';


export default function Scores({ getScores, scores }) {
	useEffect(() => {
		getScores()
	}, []);

	return (
		<ScoresWrapper component={Paper}>
			<Typography variant='h3'>Meilleurs scores</Typography>
			<ScoreTable aria-label="simple table">
				<TableHead>
					<TableRow>
						<TableCell>Pseudo</TableCell>
						<TableCell align="right">Temps(en secondes)</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{scores.map(score => (
						<TableRow key={score.user}>
							<TableCell component="th" scope="row">
								{score.user}
							</TableCell>
							<TableCell align="right">{score.score}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</ScoreTable>
			<Button variant='contained' size='large' margin='dense' color='secondary' href='/game'>Jouer</Button>
		</ScoresWrapper>
	);
}