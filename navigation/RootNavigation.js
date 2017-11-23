import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import TopScreen from '../screens/TopScreen';
import RegisterScreen from '../screens/RegisterScreen';
import LoginFB from '../screens/LoginFB';
import LoginScreen from '../screens/LoginScreen.js';
import WelcomeScreen from '../screens/WelcomeScreen';
import TraineeTreatment from '../screens/TraineeTreatment';
import SelectTrainer from '../screens/SelectTrainer';
import TraineeProfile from '../screens/TraineeProfile';
import TrainerProfile from '../screens/TrainerProfile';


const RootNavigation = StackNavigator(
{	
  	TopScreen: { screen: TopScreen },
 	RegisterScreen: { screen: RegisterScreen },
 	LoginScreen: { screen: LoginScreen},
 	WelcomeScreen :{ screen: WelcomeScreen},
 	TraineeTreatment :{ screen: TraineeTreatment},
 	SelectTrainer : { screen: SelectTrainer},
 	TraineeProfile : { screen: TraineeProfile},
 	TrainerProfile : { screen: TrainerProfile}
 
},
{
	headerMode:'none'
}

);
export default RootNavigation;
