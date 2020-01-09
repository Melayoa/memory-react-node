import {
	GET_SCORES_REQUEST_SUCCESS,
	GET_SCORES_REQUEST_ERROR,
	SEND_SCORES_REQUEST_SUCCESS,
	SEND_SCORES_REQUEST_ERROR
} from "../actions";

const initialState = [];
// À l'action success je lance storeSuccess qui copie mon state actuel et y ajoute scoresTable avec la data récupérée
const scoreSuccess = (state, action) => ({ ...state, scoresTable: action.data })

const scoreError = (state, action) => ({ ...state, error: action.error })

const sendScoreSuccess = (state) => ({ ...state })

const sendScoreError = (state, action) => ({ ...state, error: action.error })

export const getScoresReducer = (state = initialState, action) => {

	switch (action.type) {
		// Après le put success de ma saga, l'action est dispatchée et on arrive ici
		// Donc pour l'action ayant pour type GET_SCORES_REQUEST_SUCCESS je retourne le résultat de scoreSuccess
		case GET_SCORES_REQUEST_SUCCESS:
			return scoreSuccess(state, action)
		case GET_SCORES_REQUEST_ERROR:
			return scoreError(state, action);
		case SEND_SCORES_REQUEST_SUCCESS:
			return sendScoreSuccess(state)
		case SEND_SCORES_REQUEST_ERROR:
			return sendScoreError(state, action);
		default:
			return state
	}
}