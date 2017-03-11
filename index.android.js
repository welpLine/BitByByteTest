import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native'; //if installed with npm then dont need path
import Main from './src/components/Main';

export default class BitByByteTest extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Main />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});

//render shit
AppRegistry.registerComponent('BitByByteTest', () => BitByByteTest); //auto returns App
