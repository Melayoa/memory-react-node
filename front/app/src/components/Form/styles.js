import glamorous from 'glamorous';

export const FormWrapper = glamorous.div({
	flex: 1,
	display: 'flex',
	justifyContent: 'center',
	margin: 20,
	alignItems: 'center',
	backgroundColor: 'white',
})

export const FormText = glamorous.p({
	fontSize: '1.5em',
})

export const WinOrLoseBlock = glamorous.div({
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center'
})