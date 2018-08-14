import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import Home from './Home';
import Detail from './Detail';

class app extends Component {
    render(){
        return (
            <Router navigationBarStyle={{backgroundColor:'#434445',color:'#FFFFFF'}} titleStyle={{color:'#FFFFFF'}} tintColor='white' >
                <Scene key='root'>
                    <Scene key="HomeScreen" component={Home}  hideNavBar={1} navTransparent={1}  tintColor='white' title="Statistik" initial />
                    <Scene key="DetailScreen" component={Detail} tintColor='white' title="Statistik" />
                </Scene>
            </Router>
        );
    }
}

export default app;