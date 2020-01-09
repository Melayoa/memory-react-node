import React, { Component } from 'react';
import { TimerText, TimerValue, Timer } from './styles';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';


//Composant progressBar
export default class ProgressBar extends Component {
	render() {
		const renderTime = value => {
			if (value === 0) {
				return <Timer>Trop tard...</Timer>;
			}
			if (value <= 10) {
				// C'est ici que l'on utilise nos composants styled (voir styles.js). 
				return <Timer>
					<TimerText>Viiiiite</TimerText>
					<TimerValue>{value}</TimerValue>
					<TimerText>secondes</TimerText>
				</Timer>;
			}


			return (
				<Timer>
					<TimerText>Il reste</TimerText>
					<TimerValue>{value}</TimerValue>
					<TimerText>secondes</TimerText>
				</Timer>
			);
		};
		// On utilise CountdownCircleTimer qui vient d'une lib et on lui passe les props pour la durée et la couleur du timer
		return (
			<CountdownCircleTimer
				isPlaying
				durationSeconds={120}
				colors={[
					['#004777', .33],
					['#F7B801', .33],
					['#A30000']
				]}
				renderTime={renderTime}
			/>
		);
	}
}