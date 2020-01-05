import Home from '../Home';
import Scores from '../ScoresTable';
import Board from '../Board';

export default [
	{
		name: 'Home',
		id: 'home-page',
		path: '/',
		component: Home,
		exact: true,
	},
	{
		name: 'Scores',
		id: 'scores-page',
		path: '/scores',
		component: Scores,
		exact: true,
	},
	{
		name: 'Game',
		id: 'game-page',
		path: '/game',
		component: Board,
		exact: true,
	}
]