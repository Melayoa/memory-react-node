import { combineReducers } from 'redux';
import { getScoresReducer } from './reducers/get-scores';

//Point d'entrée des reducers
const allReducers = combineReducers({
	scores: getScoresReducer
});

export default allReducers;