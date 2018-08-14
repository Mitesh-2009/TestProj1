import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';

class Home extends Component {
    PressButton = () => {
        Actions.DetailScreen();
    }
    render(){
        return (
            <View style={{flex:1,backgroundColor:'#434445',justifyContent:'center',alignItems:'center'}}>
                <Button onPress={this.PressButton}
                title="Go to Detail Screen"
                color="#FFFFFF"
                />
            </View>
        );
    }
}

export default Home;