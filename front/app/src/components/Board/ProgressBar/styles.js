import glamorous from 'glamorous';
// glamorous permet de faire du style en JS et de créer nos propres composant avec leur propre style
// les balises React classique (div, p, img ...) sont déjà définies dans glamorous.
// On a quand même la possibilité d'importer le composant TableContainer par exemple pour l'utiliser voir l'exemple dans ../ScoresTable/styles.js
export const TimerText = glamorous.div({
	color: '#aaa',
	fontSize: '1.5em',
})

export const TimerValue = glamorous.div({
	fontSize: '40px'
})
export const Timer = glamorous.div({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
})