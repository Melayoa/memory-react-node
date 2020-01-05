import glamorous from 'glamorous';
import snow from '../src/ressources/images/christmas.jpg';

export const AppWrapper = glamorous.div({
	display: 'flex',
	flexDirection: 'column',
	height: '100vh',
	backgroundImage: `url(${snow})`
})