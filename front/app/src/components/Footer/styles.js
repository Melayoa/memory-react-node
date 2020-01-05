import glamorous from 'glamorous';

export const FooterWrapper = glamorous.div({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center',
	height: '50px',
})

export const Separator = glamorous.div({
	height: '1px',
	top: 0,
	width: '500px',
	marginBottom: 5,
	backgroundColor: 'grey'
})