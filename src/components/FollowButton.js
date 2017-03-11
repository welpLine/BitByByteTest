import React, { Component, PropTypes } from 'react';
import {
	StyleSheet,
	TouchableOpacity,
	Text,
	Easing,
	Alert,
	View,
} from 'react-native';

export default class Button extends Component {
	constructor() {
		super();

		this.state = {
			isLoading: false,
		};

		this._onPress = this._onPress.bind(this);
	}

	_onPress() {
			Alert.alert("Followed!");
	}

	render() {

		return (
			<View style={styles.container}>
      <TouchableOpacity style={styles.button}
        onPress={this._onPress}
        activeOpacity={1} >
          {
            <Text style={styles.text}>+Follow</Text>
          }
      </TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		justifyContent: 'flex-start',
	},
	button: {
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'transparent',
		height: 25,
    width: 75,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
		borderRadius: 5,
    borderWidth: 1.2,
    borderColor:"blue",
		zIndex: 200,
	},
	text: {
		color: 'blue',
		backgroundColor: 'transparent',
    fontSize: 14
	},
});
