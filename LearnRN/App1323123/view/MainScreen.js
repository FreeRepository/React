/* @flow */

import React, { Component } from 'react';
import styles from '../styles/styles';
import {StackNavigator} from 'react-navigation';
import {PictureScreen} from './PictureScreen';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity
} from 'react-native';

export default class MainScreen extends Component {
  render() {
    const {routeName} = this.props.navigation.state;
    return (
      <View style={styles.container}>
        <Text>I'm the {routeName}</Text>
      </View>
    );
  }
}
