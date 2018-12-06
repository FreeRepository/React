/* @flow */

import React, { Component } from 'react';
import styles from '../styles/styles';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native';

//头部
class HeaderTitle extends Component{
  render(){
    return(
      <View style={styles.headerTitleContainer}>
          <TouchableOpacity style={styles.headerAvatarContent}  onPress={()=>this.onPress()}>
                  {/* <Image style={styles.headerRing} source={ImgConfig.default_transparent}/> */}
                  <Image style={styles.headerAvatar} source={require('../img/user.png')}/>
          </TouchableOpacity>
          <Text style={styles.headerName}>{this.props.text}</Text>
      </View>
    );
  }
  onPress(){
    alert('hello');
  }
}

  class InfoContent extends Component{
    render(){
      let {top=0,text=""}=this.props;
      return(
        <View style={[styles.infoContent,{marginTop:top}]}>
          <TouchableOpacity style={styles.infoTouchable}>
                <View style={styles.infoFlex}>
                    <Text style={styles.infoName}>{text}</Text>
                </View>
                <View style={[styles.infoFlex,styles.infoIconContent]}>
                    <Image style={styles.infoIcon} source={require('../img/go.png')}/>
                </View>
          </TouchableOpacity>
        </View>
      )
    }
  }

export class SettingsScreen extends Component {
  render() {
    return (
      <View style={{flex:1, width:null}}>
        <HeaderTitle text={'孙朝阳'}></HeaderTitle>
        <InfoContent text="私密空间" top={16} />
        <InfoContent text="修改密码" top={16}/>
        <InfoContent text="检测升级" top={1}/>
        <InfoContent text="关于我们"  top={16}/>
      </View>
    );
  }
}
