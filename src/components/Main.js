import React, { Component } from 'react';
import { Router, Scene, Actions, ActionConst } from 'react-native-router-flux';

import FirstScreen from './FirstScreen';
import SecondScreen from './SecondScreen';

export default class Main extends Component {
  render() {
	  return (
	    <Router>
	        <Scene key="FirstScreen"
	          component={FirstScreen}
	        	animation='fade'
	          hideNavBar= 'true'
	          initial={true}
	        />
          <Scene key="SecondScreen"
            component={SecondScreen}
            animation='fade'
            hideNavBar= 'false'
          />
	    </Router>
	  );
	}
}
