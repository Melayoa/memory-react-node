import glamorous from 'glamorous';

export const BoardWrapper = glamorous.div({
	flexGrow: 1,
	backgroundColor: 'white',
	display: 'flex',
	justifyContent: 'center',
	margin: 20,
	flexDirection: 'column'
})

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