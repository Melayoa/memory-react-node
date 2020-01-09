import Home from '../components/Home';
import Scores from '../components/ScoresTable';
import Game from './Game';

// Je crée un tableau d'objets pour chaques routes 
export default [
	{
		name: 'Home',
		id: 'home-page',
		path: '/',
		// Le composant que j'utilise pour ma route
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
		component: Game,
		exact: true,
	}
]