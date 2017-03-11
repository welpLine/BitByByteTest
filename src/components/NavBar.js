import React, { Component } from 'react';
import {
  TouchableHighlight,
  Text,
  Image,
  StyleSheet,
  View
} from 'react-native';
import Dimensions from 'Dimensions';
import back_chevron from '../Photos/back_chevron.png';
import { Actions } from 'react-native-router-flux';

const goBack = () => Actions.pop();

export default class NavBar extends Component {
  render() {
    return (
      <View style={styles.view}>
        <TouchableHighlight onPress={goBack} style={styles.touch} underlayColor= 'white'>
          <View style={styles.view2}>
          <Image source={back_chevron} style={styles.img}/>
          <Text style={styles.text}>Back</Text>
          </View>
        </TouchableHighlight>
        <Text style={styles.text2}>Profile</Text>
      </View>
    )
  }
}

const DEVICE_WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
  text:
  {
    paddingTop: 5,
    fontSize: 20,
    color: '#2681dc'
  },
  text2:
  {
    paddingLeft: (DEVICE_WIDTH-225)/2,
    textAlign: 'center',
    paddingTop: 5,
    fontSize: 22,
    color: '#000'
  },
  view:
  {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 1,
    height: 55,
    paddingTop: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    elevation: 2,
    position: 'relative',
  },
  view2:
  {
    flexDirection: 'row'
  },
  touch:
  {
    paddingLeft: 5,
    maxWidth: 75,
  },
  img:
  {
    width: 22,
    height: 40,
  }
});
