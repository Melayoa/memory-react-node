import { all } from 'redux-saga/effects';
import { watchScoreSaga } from './sagas/get-scores';
import { watchSendScoreSaga } from './sagas/send-scores';

//Point d'entrée des sagas
export default function* rootSaga() {
	yield all([
		watchScoreSaga(),
		watchSendScoreSaga()
	])
}