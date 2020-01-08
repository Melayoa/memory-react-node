import { put, takeEvery, call } from 'redux-saga/effects'
import { getScores } from '../../business/api';
import { getScoresSuccess, getScoresError, GET_SCORES_REQUEST } from '../actions';
import axios from 'axios';

function* getScoresSaga() {
	try {
		const { data } = yield call(getScores);
		console.log(data)
		yield put(getScoresSuccess(data))
	} catch (error) {
		console.log(error)
		yield put(getScoresError(error))
	}

}

export function* watchScoreSaga() {
	yield takeEvery(GET_SCORES_REQUEST, getScoresSaga)
}
