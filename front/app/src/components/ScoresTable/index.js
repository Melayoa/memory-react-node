import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Scores from './component';
import { getScoresRequest } from '../../redux/actions';

const mapStateToProps = (state, ownProps) => {
	console.log(state)
	return { scores: state.scores.scoresTable || [] }
}

const mapDispatchToProps = (dispatch) => {
	return {
		getScores: bindActionCreators(getScoresRequest, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Scores);