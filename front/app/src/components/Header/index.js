import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

export default function Header() {
	// Pour les styles, comme on utilise material ui on peut utiliser makeStyles avec le theme
	// Pour ça, on crée un hook perso qui utilise makeStyles
	const useStyles = makeStyles(theme => ({
		menuButton: {
			marginRight: theme.spacing(2),
		},
		title: {
			flexGrow: 1,
		},
	}));

	// on utilise notre hook
	const classes = useStyles();

	return (
		<div >
			<AppBar position="static">
				<Toolbar>
					{/* On peut donc utiliser notre hook en className */}
					<Typography variant="h6" className={classes.title}>
						Jeu memory de la reine des neiges
				</Typography>
					<Button color="inherit" href='/scores'>Scores</Button>
				</Toolbar>
			</AppBar>
		</div>
	)
}


