import React, { Component, PropTypes } from 'react';
import Dimensions from 'Dimensions';
import {
	StyleSheet,
	TouchableOpacity,
	Text,
	Easing,
	Image,
	Alert,
	View,
} from 'react-native';
import { Actions, ActionConst } from 'react-native-router-flux';
import butImg from '../Photos/Start Button.png';

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
const MARGIN = 45;

export default class Button extends Component {
	constructor() {
		super();

		this.state = {
			isLoading: false,
		};

		this._onPress = this._onPress.bind(this);
	}

	_onPress() {
			Actions.SecondScreen();
	}

	render() {

		return (
			<View style={styles.container}>
			<TouchableOpacity style={styles.button}
        onPress={this._onPress}
        activeOpacity={.7} >
          {
            <Text style={styles.text}>Start</Text>
          }
      </TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 2,
		top: -50,
		alignItems: 'center',
		justifyContent: 'flex-start',
	},
	button: {
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'transparent',
		height: MARGIN,
    width: 5*MARGIN,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
		borderRadius: 5,
    borderWidth: 1,
    borderColor:"black",
		zIndex: 100,

	},
	text: {
		color: 'white',
		backgroundColor: 'transparent',
    fontSize: 20
	},
});
