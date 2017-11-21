import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import TopScreen from '../screens/TopScreen';
import RegisterScreen from '../screens/RegisterScreen';
import LoginFB from '../screens/LoginFB';
import LoginScreen from '../screens/LoginScreen.js';


const RootNavigation = StackNavigator(
{	
  	TopScreen: { screen: TopScreen },
 	RegisterScreen: { screen: RegisterScreen },
 	LoginScreen: { screen: LoginScreen}
 
},
{
	headerMode:'none'
}

);
export default RootNavigation;
