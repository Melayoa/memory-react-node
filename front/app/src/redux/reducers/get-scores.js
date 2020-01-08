import { GET_SCORES_REQUEST_SUCCESS, GET_SCORES_REQUEST_ERROR, SEND_SCORES_REQUEST_SUCCESS, SEND_SCORES_REQUEST_ERROR } from "../actions";

const initialState = [];

const scoreSuccess = (state, action) => ({ ...state, scoresTable: action.data })

const scoreError = (state, action) => ({ ...state, error: action.error })

const sendScoreSuccess = (state, action) => ({ ...state })

const sendScoreError = (state, action) => ({ ...state, error: action.error })

export const getScoresReducer = (state = initialState, action) => {

	switch (action.type) {
		case GET_SCORES_REQUEST_SUCCESS:
			return scoreSuccess(state, action)
		case GET_SCORES_REQUEST_ERROR:
			return scoreError(state, action);
		case SEND_SCORES_REQUEST_SUCCESS:
			return sendScoreSuccess(state, action)
		case SEND_SCORES_REQUEST_ERROR:
			console.log(action)
			return sendScoreError(state, action);
		default:
			return state
	}
}