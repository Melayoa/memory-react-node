import { put, takeEvery, call } from 'redux-saga/effects'
import { getScores } from '../../business/api';
import { getScoresSuccess, getScoresError, GET_SCORES_REQUEST } from '../actions';

// Une saga est une fonction génératrice
// Chaque yield sera effectué l'un après l'autre
// Pour de grosses applications cela permets de gérer beaucoup d'action avant de mettre la data dans le state ou avant
// de faire l'appel vers l'api
function* getScoresSaga() {
	try {
		// call permet d'appeler getScores qui est l'appel a l'api
		const { data } = yield call(getScores);

		// put vas dispatcher mon action de success ou d'erreur avec la data de l'api en paramêtre
		yield put(getScoresSuccess(data))
	} catch (error) {
		yield put(getScoresError(error))
	}

}

// takeEvery vas regarder les actions qui passent et quand GET_SCORES_REQUEST sera dispatché il déclenchera getScoresSaga
export function* watchScoreSaga() {
	yield takeEvery(GET_SCORES_REQUEST, getScoresSaga)
}
