import glamorous from 'glamorous';

export const BoardWrapper = glamorous.div({
	flexGrow: 1,
	backgroundColor: 'white',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	margin: 20,
	flexDirection: 'column'
})
export const CardWrapper = glamorous.div({
	flexWrap: 'wrap',
	display: 'flex',
	width: 600,
	flexDirection: 'row'
})