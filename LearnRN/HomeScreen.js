import React, { Component } from 'react';
import {View, Text, Button} from 'react-native';

export default class HomeScreen extends Component {
    static navigationOptions = {
        title: 'Home',
    };
    render() {
        const navigate = this.props.navigation;
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>Home Screen</Text>
                <Button title="Go to Details" onPress={() =>
                    navigate.navigate('Details')
                }/>
            </View>
        );
    }
}
