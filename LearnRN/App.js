/**
 * Sample React Native App1323123
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

// import HomeScreen from './HomeScreen';
// import ProfileScreen from './ProfileScreen';
//
// import {
//     createStackNavigator,
// } from 'react-navigation';
//
// const App = createStackNavigator({
//     Home: { screen: HomeScreen },
//     Profile: { screen: ProfileScreen },
// });
//
// export default App;

import React, { Component } from 'react';
import {createStackNavigator} from 'react-navigation';
import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';


export default class App extends Component {
    render(){
        return <RootStack />
    }
}

const RootStack = createStackNavigator({
    Home:{
        screen:HomeScreen
    },
    Details: {
        screen: DetailsScreen
    }
});
