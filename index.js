/** @format */

import {AppRegistry} from 'react-native';

import App from './src/app';
if (__DEV__) { console.ignoredYellowBox = ['Remote debugger']; }
console.disableYellowBox = true;
AppRegistry.registerComponent('MiteshProj1', () => App);
