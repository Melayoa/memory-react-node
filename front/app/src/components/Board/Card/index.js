import React from 'react';
import PropTypes from 'prop-types';

import back from '../../../ressources/images/logo.png';

export default function Card({
	handleClick,
	id,
	type,
	flipped,
	solved,
	height,
	width,
	disabled
}) {
	return <div
		style={{
			width: 120, height: 120
		}}
		onClick={() => disabled ? null : handleClick(id)}
	>
		<div>
			<img
				style={{
					height: 120, width: 120
				}}
				src={flipped || solved ? type : back}
				alt={type.toString()}
			/>
		</div>
	</div>
}

Card.propTypes = {
	handleClick: PropTypes.func.isRequired,
	id: PropTypes.number.isRequired,
	flipped: PropTypes.bool.isRequired,
	solved: PropTypes.bool.isRequired,
	type: PropTypes.string.isRequired,
	disabled: PropTypes.bool.isRequired
}