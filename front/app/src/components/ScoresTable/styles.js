import glamorous from 'glamorous';
import { TableContainer, Table } from '@material-ui/core';

export const ScoresWrapper = glamorous(TableContainer)({
	flexGrow: 1,
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
})

export const ScoreTable = glamorous(Table)({
	flex: 1,
	margin: 10,
	maxWidth: 650
})