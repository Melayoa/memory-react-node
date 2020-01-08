import { put, takeEvery, call } from 'redux-saga/effects'
import { putScores } from '../../business/api';
import { SEND_SCORES_REQUEST, sendScoresError, sendScoresSuccess } from '../actions';

function* sendScoresSaga(action) {
	try {
		const { name, score } = action;
		const requestData = { name, score }
		const { data } = yield call(putScores, requestData);
		yield put(sendScoresSuccess(data))
	} catch (error) {
		yield put(sendScoresError(error))
	}

}

export function* watchSendScoreSaga() {
	yield takeEvery(SEND_SCORES_REQUEST, sendScoresSaga)
}
