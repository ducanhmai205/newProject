'use strict';

import React, { Component } from 'react';

import {
   StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  Alert,
  TouchableOpacity,
  Platform
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
class LoginScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
            <Image  source={require('../img/loginscreen.png')} style={styles.backgroundImage}>
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
                                                                   placeholder="E-mail"
                                                                   placeholderTextColor = "#47E5B3"
                                                                   onChangeText={UserEmail => this.setState({UserEmail})}
                                                                   keybroadType="email-address"
                                                />


                                           </View>

                                                <View style={styles.passwordInput}>
                                                      <TextInput
                                                            style={{flex: 1,paddingLeft: 40}}
                                                            placeholderTextColor = "#47E5B3"
                                                            underlineColorAndroid='transparent'
                                                            placeholder="Password"
                                                            onChangeText={UserPassword => this.setState({UserPassword})}
                                                            secureTextEntry
                                        
                                                       />   
                                                   <TouchableOpacity  >
                                             <Ionicons name="ios-eye" size={20} />
                                             </TouchableOpacity>

                                                 </View>

                                                      <View style={styles.topButton}>

                                                       </View> 
                                                    <View style={styles.loginButton}>
                                                              <TouchableOpacity  style={{flex: 1,}}>
                                                          <Image  source={require('../img/1loginbutton.png')} style={{flex: 1,width:null,height:null}}>
                                                          </Image>
                                                    </TouchableOpacity>


                                                     </View>

                                                        <View style={styles.forgotPass}>
                        


                                                         </View>

                                                                <View style={styles.commit}>
                        


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
},
backgroundImage:{
  flex: 1,
  width:null,
  height:null
},
containerImage:{
flex: 1,

},
textHeader:{
  flex: 0.8,
  flexDirection:'row',

justifyContent: 'flex-end',
alignItems: 'center',
paddingRight:13
},
fbButton:{
flex: 0.45,
 
 paddingBottom: (Platform.OS === 'ios') ? 0 : 10 ,
paddingLeft:26,
paddingRight:23
},
orButton:{
flex: 0.9,

},
nameInput:{
flex: 0.6,
paddingLeft:26,

},
passwordInput:{
  flex: 0.6,
  paddingLeft:26,
  paddingRight:60,
justifyContent: 'center',
  alignItems: 'center',
  flexDirection:'row',

},
loginButton:{
  flex: 0.5,
  paddingHorizontal:23,
 
   marginTop: (Platform.OS === 'ios') ? 1 : 20 ,
},
forgotPass:{
  flex: 0.4,


},

commit:{
flex: 1.5,

},
topButton:{
    flex: 0.2,
   
}
});


export default LoginScreen;