import { combineReducers } from 'redux';
import { getScoresReducer } from './reducers/get-scores';

const allReducers = combineReducers({
	scores: getScoresReducer

});

export default allReducers;