import React, { Component, PropTypes } from 'react';
import {
	StyleSheet,
	View,
	Text,
  Image,
  Button,
} from 'react-native';
import ProfilePicture from '../Photos/Profile Picture.png';
import Dimensions from 'Dimensions';
import FollowButton from './FollowButton';

export default class BigProfile extends Component {
	render() {
		return (
        <View style={styles.container}>
          <Image source={ProfilePicture} style={styles.img}/>
          <View style={{width:25, height: 25, backgroundColor: 'white'}} />
          <View style={styles.view2}>
            <Text style={styles.text2}>{this.props.name}</Text>
            <View style={styles.nextTo}>
              <Text style={styles.text4}>Places:</Text>
              <Text style={styles.text3}>France,{"\n"}Brazil,{"\n"}Italy</Text>
            </View>
          </View>
          <View style={styles.button1}>
            <FollowButton/>
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({

    container: {
  		flex: 1,
      maxHeight: 110,
      flexDirection: "row",
      paddingTop: 15,
      paddingLeft: 25,
  	},
    text2:
    {
      color: 'grey',
      fontSize: 22,
      paddingTop: 0,
      backgroundColor: 'transparent',
      justifyContent: 'center',
    },
    text3:
    {
      color: 'grey',
      fontSize: 14,
      paddingTop: 3,
      backgroundColor: 'transparent',
      justifyContent: 'center',
      paddingLeft: 0,
      paddingRight: 0,
      maxWidth: 75
    },
    text4:
    {
      color: 'grey',
      fontSize: 14,
      paddingTop: 3,
      backgroundColor: 'transparent',
      justifyContent: 'center',
      paddingLeft: 0,
      paddingRight: 10,
    },
    img:
    {
      justifyContent: 'center',
    },
    view2:
    {
      alignItems: 'flex-start',
      flexDirection: "column",
    },
    view3:
    {
      flex: 1,
      flexDirection: "column",
      maxHeight: 230,
    },
    nextTo:
    {
      flexDirection: "row",
    },
    button1:
    {
      flex: 0,
      justifyContent: 'center',
      paddingLeft: 50,
    }
  });
