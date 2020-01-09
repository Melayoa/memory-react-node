import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Form from './component';
import { sendScores } from '../../redux/actions';

// Container
const mapDispatchToProps = (dispatch) => {
	return {
		// Rend sendScore accessible au composant Form dans les props.
		// Quand Form va l'utiliser sendScores dispatcheras mon action { type : ..., data}
		sendScores: bindActionCreators(sendScores, dispatch)
	}
}

export default connect({}, mapDispatchToProps)(Form);