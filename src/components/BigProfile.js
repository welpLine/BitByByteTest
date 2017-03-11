import React, { Component, PropTypes } from 'react';
import {
	StyleSheet,
	View,
	Text,
  Image
} from 'react-native';
import ProfilePicture from '../Photos/Profile Picture.png';
import Dimensions from 'Dimensions';

export default class BigProfile extends Component {
	render() {
		return (
      <View style={styles.view3}>
      <View style={styles.container}>
        <Image source={ProfilePicture} style={styles.img}/>
        <View style={{width:40, height: 25, backgroundColor: 'white'}} />
        <View style={styles.view2}>
          <Text style={styles.text}>Jenny smith</Text>
          <Text style={styles.text2}>About:</Text>
        </View>
			</View>
      <Text style={styles.text3}>H ＥＬＬＯ ＡＭ ４８ ＹＥＡＲ ＭＡＮ ＦＲＯＭ ＳＯＭＡＬＩＡ． ＳＯＲＲＹ ＦＯＲ ＢＡＤ ＥＮＧＬＡＮＤ． Ｉ ＳＥＬＬＥＤ ＭＹ ＷＩＦＥ ＦＯＲ ＩＮＴＥＲＮＥＴ ＣＯＮＮＥＣＴＩＯＮ ＦＯＲ ＰＬＡＹ ＂ｈｅａｒｔｈ ｓｔｏｎｅ＂ ＡＮＤ Ｉ ＷＡＮＴ ＴＯ ＢＥＣＯＭＥ ＴＨＥ ＧＯＯＤＥＳＴ ＰＬＡＹＥＲ ＬＩＫＥ ＹO U </Text>
      </View>
		);
	}
}

const DEVICE_WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		//justifyContent: 'center',
    maxHeight: 110,
    flexDirection: "row",
    paddingTop: 25,
    paddingLeft: 25,
	},
	text: {
		color: 'grey',
		fontSize: 22,
    paddingTop: 20,
		backgroundColor: 'transparent',
    justifyContent: 'center',
	},
  text2:
  {
    color: 'grey',
    fontSize: 16,
    paddingTop: 5,
    backgroundColor: 'transparent',
    justifyContent: 'center',
  },
  text3:
  {
    color: 'grey',
    fontSize: 14,
    paddingTop: 5,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    paddingLeft: 25,
    paddingRight: 25,
  },
  img:
  {
    justifyContent: 'center',
  },
  view2:
  {
    alignItems: 'center',
    flexDirection: "column",
  },
  view3:
  {
    flex: 1,
    flexDirection: "column",
    maxHeight: 230,
  }
});
