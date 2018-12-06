import React, { Component } from 'react';
class ProfileScreen extends Component {
    // constructor(){
    //     super();
    //     this.state = {
    //         name: 'aaa'
    //     }
    // }

    static navigationOptions = {
        title: 'Profile',
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <Button
                title={navigationOptions.title}
                onPress={() =>
                    navigate('Profile', { name: 'Jane' })
                }
            />
        );
    }
}
