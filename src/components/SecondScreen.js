import React, { Component, PropTypes } from 'react';
import {
	Text,
	View,
	StyleSheet,
	ListView
} from 'react-native';
import NavBar from '../components/NavBar';
import { Actions } from 'react-native-router-flux';
import BigProfile from './BigProfile.js';
import SmallProfile from './SmallProfiles.js';

export default class SecondScreen extends Component {
	  constructor(props) {
	    super(props);
	    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
	    this.state = {
	      dataSource: ds.cloneWithRows([
	        "jenny","mark", "alex", "asdf", "fafda", "aafasf", "asdf", "assadf"
	      ])
	    };
	  }



	render() {
		return (
			<View style={styles.container}>
				<NavBar />
			  <BigProfile />
				<Text style={styles.text}>Related People:</Text>
				<ListView
					dataSource={this.state.dataSource}
					renderRow={(rowData) => <SmallProfile name={rowData} />}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
  container:
  {
    flex: 1,
    flexDirection: 'column'
  },
	text:
	{
		color: 'grey',
		fontSize: 14,
		paddingTop: 5,
		paddingLeft: 25,
		backgroundColor: 'transparent',
		justifyContent: 'center',
	},
});
