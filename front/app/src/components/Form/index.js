import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Scores from './component';
import { getScoresRequest, sendScores } from '../../redux/actions';

const mapStateToProps = (state, ownProps) => {
}

const mapDispatchToProps = (dispatch) => {
	return {
		sendScores: bindActionCreators(sendScores, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Scores);