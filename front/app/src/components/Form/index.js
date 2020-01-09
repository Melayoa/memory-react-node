import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Form from './component';
import { sendScores } from '../../redux/actions';

// Container
const mapDispatchToProps = (dispatch) => {
	return {
		// Rends sendScore accessible au composant Form dans les props.
		// Quand Form va l'utiliser sendScores dispatchera mon action { type : ..., data}
		sendScores: bindActionCreators(sendScores, dispatch)
	}
}

export default connect({}, mapDispatchToProps)(Form);