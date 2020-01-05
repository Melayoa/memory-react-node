import React, { Component } from 'react';
import { BoardWrapper, TimerText, TimerValue, Timer } from './styles';
import Cards from './Cards';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

export default class Board extends Component {
	render() {
		const renderTime = value => {
			if (value === 0) {
				return <Timer>Trop tard...</Timer>;
			}
			if (value <= 10) {
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

		return (
			<BoardWrapper>
				<Cards />
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
			</BoardWrapper>
		);
	}
}