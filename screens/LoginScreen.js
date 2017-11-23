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
import LoginFB from '../screens/LoginFB';
class LoginScreen extends Component {
  constructor(props) {
 
    super(props)
 
    this.state = {
 
      UserEmail: '',
      UserPassword: ''
 
    }
 
  }
 

UserLoginFunction = () =>{
 

 
 
fetch('http://192.168.1.28/Mare/User_Login.php', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
 
    email: this.state.UserEmail,
 
    password: this.state.UserPassword
 
  })
 
}).then((response) => response.json())
      .then((responseJson) => {
 
        // If server response message same as Data Matched
       if(responseJson === 'Data Matched')
        {
 
            //Then open Profile activity and send user email to profile activity.
            this.props.navigation.navigate('WelcomeScreen', { Email: this.state.UserEmail,  });
 
        }
        else{
 
          Alert.alert(responseJson);
        }
 
      }).catch((error) => {
        console.error(error);
      });
 
  }
  render() {
        const {goBack} = this.props.navigation;

    return (
      <View style={styles.container}>
            <Image  source={require('../img/user/login.png')} style={styles.backgroundImage}>
                  <View style={styles.containerImage}>
                        <View style={styles.textHeader}>
                                
                            <TouchableOpacity  style={{flex: 0.2,}} onPress={() => goBack()}>
                                  <Image  source={require('../img/Xbutton.png')} style={{flex: 0.5,width:null,height:null,marginTop:10}}>
                             
                                  </Image>
                            </TouchableOpacity>


                        </View>
                              <View style={styles.fbButton}>
                                    <TouchableOpacity  style={{flex: 1,}}>
                                          <LoginFB> </LoginFB>
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
                                                   <TouchableOpacity  style={{backgroundColor:'rgba(0,0,0,0)'}}>
                                             <Ionicons name="ios-eye" size={20} />
                                             </TouchableOpacity>

                                                 </View>

                                                      <View style={styles.topButton}>

                                                       </View> 
                                                    <View style={styles.loginButton}>
                                                              <TouchableOpacity  style={{flex: 1,}} onPress={this.UserLoginFunction}>
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
paddingLeft:25,

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