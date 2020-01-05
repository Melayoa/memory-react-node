import React, { Component } from 'react';
import { FooterWrapper, Separator } from './styles';
import { Typography } from '@material-ui/core';

export default class Footer extends Component {
	render() {
		return (
			<FooterWrapper>
				<Separator />
				<Typography >Le jeu préféré de la reine des neiges par Mela</Typography>
			</FooterWrapper>);
	}
}