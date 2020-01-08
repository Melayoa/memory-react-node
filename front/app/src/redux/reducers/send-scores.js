import { SEND_SCORES_REQUEST_SUCCESS, SEND_SCORES_REQUEST_ERROR } from "../actions";

const initialState = {};

const sendScoreSuccess = (state, action) => ({ ...state })

const sendScoreError = (state, action) => ({ ...state, error: action.error })

export const sendScoresReducer = (state = initialState, action) => {

	switch (action.type) {
		case SEND_SCORES_REQUEST_SUCCESS:
			return sendScoreSuccess(state, action)
		case SEND_SCORES_REQUEST_ERROR:
			return sendScoreError(state, action);
		default:
			return state
	}
}