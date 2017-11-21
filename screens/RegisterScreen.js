'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Image,
  Platform,
  TouchableOpacity,
  TextInput,
  Text
} from 'react-native';
import { Font } from 'expo';
import { Ionicons } from '@expo/vector-icons';
class RegisterScreen extends Component {
  state = {
    fontLoaded: false,
  };
  async componentDidMount() {
    await Font.loadAsync({
      'pomeranian': require('../assets/fonts/pomeranian.ttf'),
    });

    this.setState({ fontLoaded: true });
  }
  render() {
    return (
      <View style={styles.container}>
        <Image  source={require('../img/signin1.png')} style={styles.backgroundImage}>
          <View style={styles.containerImage}>
              <View style={styles.textHeader}>
              
                            <TouchableOpacity  style={{flex: 0.2,}}>
                                  <Image  source={require('../img/Xbutton.png')} style={{flex: 0.5,width:null,height:null,marginTop:10}}>
                             
                                  </Image>
                            </TouchableOpacity>

                    
              </View>

                    <View style={styles.fbButton}>
                      <TouchableOpacity  style={{flex: 1,}}>
                            <Image  source={require('../img/FBbutton.png')} style={{flex: 1,width:null,height:null}}>
                            </Image>
                      </TouchableOpacity>
                    </View>

                          <View style={styles.orButton}>

                          </View>

                              <View style={styles.nameInput}>
                                    <TextInput
                                          style={{flex: 1,paddingLeft: 40}}
                                          underlineColorAndroid='transparent'
                                                      placeholder="Name"
                                                      placeholderTextColor = "#47E5B3"
                                          onChangeText={UserName => this.setState({UserName})}
                                    />

                              </View>

                                    <View style={styles.emailInput}>
                                        <TextInput
                                                    style={{flex: 1,paddingLeft: 40}}
                                                    underlineColorAndroid='transparent'
                                                    keyboardType= 'email-address'
                                                                placeholder="E-mail"
                                                                placeholderTextColor = "#47E5B3"
                                                                onChangeText={UserEmail => this.setState({UserEmail})}
                                         />
                                    </View>

                                        <View style={styles.passwordInput}>
                                            <TextInput
                                                    style={{flex: 1,paddingLeft: 5}}
                                                    underlineColorAndroid='transparent'
                                                                placeholder="Password"
                                                                placeholderTextColor = "#47E5B3"
                                                                onChangeText={UserPassword => this.setState({UserPassword})}
                                                                secureTextEntry
                                            />
                                            <TouchableOpacity  >
                                             <Ionicons name="ios-eye" size={20} />
                                             </TouchableOpacity>


                                        </View>

                                          <View style={styles.checkBox}>

                                           </View>

                                              <View style={styles.registerButton}>
                                                    <TouchableOpacity  style={{flex: 1,}}>
                                                          <Image  source={require('../img/signinbutton.png')} style={{flex: 1,width:null,height:null}}>
                                                          </Image>
                                                    </TouchableOpacity>
                                              </View>

                                                  <View style={styles.loginButton}>
                                                        
                                                  </View>
          </View>                                     
        </Image>
      </View>
    );
  }
}

const styles = StyleSheet.create({
container:{
  flex: 1,
  backgroundColor:'white'
},
backgroundImage:{
  flex: 1,
  height:null,
  width:null,
  
},
containerImage:{
flex: 1,

},
textHeader:{
   flex: 1.1,
flexDirection:'row',
 paddingHorizontal:23,
justifyContent: 'flex-end',
alignItems: 'center',

},
fbButton:{
  flex: 0.85,
  marginLeft:3,
  paddingTop:2,
  paddingHorizontal:23,
},
orButton:{
flex: 1.3,

},
nameInput:{
  flex: 0.9,
  paddingHorizontal:23,
},
emailInput:{
  flex: 0.9,
  paddingHorizontal:23,
},
passwordInput:{
  flex: 0.9,
  flexDirection:'row',
  paddingHorizontal:58,

  justifyContent: 'center',
  alignItems: 'center',
},
checkBox:{
 flex: 1.2,

},
registerButton:{
flex: 0.7,
  paddingHorizontal:18,
  marginLeft:5
},
loginButton:{
flex: 1.2,

justifyContent: 'center',
backgroundColor: 'rgba(0,0,0,0)',
paddingLeft:20
},
});


export default RegisterScreen;