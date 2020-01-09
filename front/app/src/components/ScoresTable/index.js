import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ScoresTable from './component';
import { getScoresRequest } from '../../redux/actions';

const mapStateToProps = (state, ownProps) => {
	return {
		// Je récupère scoresTable dans mon state, s'il n'est pas encore set je lui donne un array vide
		scores: state.scores.scoresTable || []
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		// Rend getScores accessible au composant ScoresTable dans les props.
		// Quand ScoresTable va l'utiliser getScores dispatcheras mon action { type : ..., data}
		getScores: bindActionCreators(getScoresRequest, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ScoresTable);