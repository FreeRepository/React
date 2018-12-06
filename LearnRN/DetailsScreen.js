import React, { Component } from 'react';
import {View, Text, Button} from 'react-native';

export default class DetailsScreen extends Component{
    static navigationOptions = {
        title: 'Details',
    };
    render() {
        const navigate = this.props.navigation;
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>Details Screen</Text>
                <Button title="Go to Details... again" onPress={() =>
                    navigate.navigate('Details')
                }/>
                <Button title="Go to Home" onPress={() =>
                    navigate.navigate('Home')
                }/>
                <Button title="Go Back" onPress={() =>
                    navigate.goBack()
                }/>
            </View>
        );
    }
}
