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

export class MiddleScreen extends Component {
  render() {
    var d = [];
    for (var i = 0; i< 30; i++) {
      d.push({key:'dd'});
    }
    return (
      <View style={styles.container}>
        <FlatList
          data={d}
          renderItem={e => this._renderItem(e)}
        />
      </View>
    );
  }

  _renderItem({item, index}){
    var data = [
      require('../img/1.jpg'),
      require('../img/2.jpg'),
      require('../img/3.jpg'),
      require('../img/4.jpg'),
      require('../img/5.jpg'),
      require('../img/6.jpg'),
    ];
    let i = index%7 == 0? 7 : index%7;
    return (
      <TouchableOpacity  onPress={this.clickItem.bind(this,item,index, data[i])}>
        <Image source={data[i]} style={styles.icon}/>
      </TouchableOpacity>
    );
  }
  clickItem(item, index, img){
    let name = '第' + index + '照片';
    this.props.navigation.navigate('PictureScreen', {name:name,img:img});
  }
}
