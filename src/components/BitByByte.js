import React, { Component, PropTypes } from 'react';
import {
	StyleSheet,
	View,
	Text
} from 'react-native';

export default class BitByBite extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.text}>BitByBite</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 2,
		alignItems: 'center',
		justifyContent: 'center',
	},
	text: {
		color: 'white',
		fontSize: 50,
		backgroundColor: 'transparent',
		marginTop: 0,
	}
});
