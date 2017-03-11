import React, { Component, PropTypes } from 'react';
import Background from './Background';
import BitByByte from './BitByByte';
import Button from './Button';

export default class FirstScreen extends Component {
	render() {
		return (
			<Background>
				<BitByByte />
				<Button />
			</Background>
		);
	}
}
