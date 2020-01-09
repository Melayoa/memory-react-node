// Définir une constante afin de la modifier a une seul endroit si besoin et permet d'éviter les fautes de frappes.
export const GET_SCORES_REQUEST = 'GET_SCORES_REQUEST';
export const SEND_SCORES_REQUEST = 'SEND_SCORES_REQUEST';
export const GET_SCORES_REQUEST_SUCCESS = 'GET_SCORES_REQUEST_SUCCESS';
export const SEND_SCORES_REQUEST_SUCCESS = 'SEND_SCORES_REQUEST_SUCCESS';
export const GET_SCORES_REQUEST_ERROR = 'GET_SCORES_REQUEST_ERROR';
export const SEND_SCORES_REQUEST_ERROR = 'SEND_SCORES_REQUEST_ERROR';

export const getScoresRequest = () => ({
	type: GET_SCORES_REQUEST,
});

export const getScoresSuccess = data => ({
	type: GET_SCORES_REQUEST_SUCCESS,
	data,
});

export const getScoresError = error => ({
	type: GET_SCORES_REQUEST_ERROR,
	error
})

export const sendScores = (name, score) => ({
	type: SEND_SCORES_REQUEST,
	name,
	score
});

export const sendScoresSuccess = data => ({
	type: SEND_SCORES_REQUEST_SUCCESS,
	data,
});

export const sendScoresError = error => ({
	type: SEND_SCORES_REQUEST_ERROR,
	error
})
