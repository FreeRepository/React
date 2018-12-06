/**
 * Sample React Native App1323123
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import styles from './styles/styles';
import MainScreen from './view/MainScreen';
import {MiddleScreen}  from './view/MiddleScreen';
import {SettingsScreen} from './view/SettingsScreen';
import {StackNavigator, TabNavigator, TabBarBottom} from 'react-navigation';
import {PictureScreen} from './view/PictureScreen';
import {
  Platform,
  Image
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu',
});
const Tab = TabNavigator(
  {
  Tab1:{
    screen:MainScreen,
  },
  Tab2:{
    screen:MainScreen,
  },
  Tab3:{
    screen:MainScreen,
  },
  Tab4:{
    screen:MainScreen,
  },
  Tab5:{
    screen:MainScreen,
  },
  Tab6:{
    screen:MainScreen,
  },
  Tab7:{
    screen:MainScreen,
  },
},
{
  tabBarOptions:{
    style: {
       backgroundColor: '#eee',
       height:40
       },
    indicatorStyle: {
    backgroundColor: '#1092ee',
    },
    tabStyle: {
    width: 80,
    },
    activeTintColor:'#1092ee',
    inactiveTintColor:'gray',
    scrollEnabled:true,
    allowFontScaling :true
  },
  // swipeEnabled:false,
  animationEnabled:false,
},
);

  const MainStack = StackNavigator({
    Main:{
      screen:Tab,
      navigationOptions:{
        headerTitle:'首页',
      }
    },
  },
{
  navigationOptions:{
    headerStyle:{//设置导航条的样式。背景色，宽高等
      backgroundColor:'#1092ee'
    },
    headerTintColor:'#eee',
    headerTitleStyle:{//设置导航条文字样式
      fontWeight:'bold'
    }
  }
});

  const MiddleStack = StackNavigator({
    Middle:{
      screen:MiddleScreen,
      navigationOptions:{
        headerTitle:'中间页'
      }
    },
    PictureScreen:{
      screen:PictureScreen,
      navigationOptions:{
        tabBarVisible:false
      }
    }
  },
{
  navigationOptions:{
    headerStyle:{//设置导航条的样式。背景色，宽高等
      backgroundColor:'#1092ee'
    },
    headerTintColor:'#eee',
    headerTitleStyle:{//设置导航条文字样式
      fontWeight:'bold'
    }
  }
});

const SettingsStack = StackNavigator({
  Settings:{
    screen:SettingsScreen,
    navigationOptions:{
      headerTitle:'设置'
    }
  }
},
{
navigationOptions:{
  headerStyle:{//设置导航条的样式。背景色，宽高等
    backgroundColor:'#1092ee'
  },
  headerTintColor:'#eee',
  headerTitleStyle:{//设置导航条文字样式
    fontWeight:'bold'
  }
}
});

const App = TabNavigator(
  {
  Main:{
    screen:MainStack,
    navigationOptions:{
      tabBarIcon:({focused}) => {
        const p = focused ? require('./img/smile.png') : require('./img/cry.png');
        return <Image source={p} style={styles.img}/>;
      }
    }
  },
  Middle:{
    screen:MiddleStack,
    navigationOptions: ({navigation}) => ({
      tabBarIcon:({focused,tintColor}) => {
        const p = focused ? require('./img/in_mid.png') : require('./img/out_mid.png');
        return <Image source={p} style={styles.img}/>;
      }
    })
  },
  Settings:{
    screen:SettingsStack,
    navigationOptions: ({navigation}) => ({
      tabBarIcon:({focused,tintColor}) => {
        const p = focused ? require('./img/in_set.png') : require('./img/out_set.png');
        return <Image source={p} style={styles.img}/>;
      }
    })
  }
},
{
  tabBarOptions:{
    style: {
           height:49
       },
    activeTintColor:'#1092ee',
    inactiveTintColor:'gray',
  },
  tabBarComponent:TabBarBottom,
  tabBarPosition:'bottom',
  swipeEnabled:false,
  animationEnabled:false,
},
);
export default App;
