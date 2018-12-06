/* @flow */

import React, { Component } from 'react';
import styles from '../styles/styles';
import FadeInView from '../anim/Animated';
import {FadeInView2} from '../anim/Animated2';
import {
  View,
  Text,
  Image,
} from 'react-native';

export class PictureScreen extends Component {
    static navigationOptions = ({navigation, navigationOptions}) => {
      const {params} = navigation.state;
      return {
        title:params ? params.name : 'tupian',
        // headerStyle:{
        //   backgroundColor:navigationOptions.headerTintColor,
        // },
        // headerTintColor:navigationOptions.headerStyle.backgroundColor
      }
    }
  render() {
    const {params} = this.props.navigation.state;
    return (
      <View>
        <FadeInView>
          <Image source={params.img} style={{height:300}}></Image>
        </FadeInView>
        <FadeInView2>
          <Text style={{marginTop:30, textAlign:'center'}}>I'm the MyComponent component</Text>
        </FadeInView2>
      </View>
    );
  }
}
