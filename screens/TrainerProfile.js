'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  Platform,

} from 'react-native';
import Dimensions from 'Dimensions';
import { LinearGradient } from 'expo';
import { Entypo } from '@expo/vector-icons';
class TrainerProfile extends Component {
  render() {
    return (
    
          <Image  source={require('../img/user/enter_trainer2.png')} style={styles.backgroundImage}>
              <View style={styles.backgroundContainer}>
                          
                                <View style={styles.header}>
                                  <View style={styles.iconrightHeader}>
                                     <Entypo name="menu" size={38} color="green" />
                                  </View> 
                                    <View style={styles.spaceHeader}>
                                    </View>
                                  <View style={styles.iconleftHeader}>
                                       
                                        
                                         <LinearGradient
                                                     colors={['red','#c7f79e']}
                       
                                                      start={{x: 0.0, y: 0}}
                                                      end={{x: 1.6, y: 0}}
                                                     style={{ flex:1, alignItems: 'center', justifyContent: 'center', borderRadius: 60}}
                                                   >
                                                    
                                                     </LinearGradient>
                           
                                  </View>
                                </View>

                                      <View style={styles.avatar}>
                                      
                                      </View>

                                           <View style={styles.textName}>
                                           
                                           </View>

                                                  <View style={styles.selectShow}>
                                                        
                                                        </View>

                                                              <View style={styles.flatlistHorizontal}>
                                                              
                                                              </View>

                                                                      <View style={styles.onlineButton}>
                                                                      
                                                                      </View>

                                                                            <View style={styles.textInfo}>
                             
                                                                            </View>
              </View>
          </Image>
      
    );
  }
}

const styles = StyleSheet.create({

backgroundImage:{
  flex: 1,
 width: Dimensions.get('window').width,
height: Dimensions.get('window').height,
  resizeMode: 'stretch',
},
backgroundContainer:{
  flex:1,
 
},
header:{
flex: (Platform.OS === 'ios') ? 1 : 0.8 ,

flexDirection:'row',
},
iconrightHeader:{
  flex: 0.2,
  paddingLeft:50,
  marginLeft:10,
  justifyContent: 'center',
  alignItems: 'center',
},
spaceHeader:{
flex: 0.8,
backgroundColor:'pink'
},
iconleftHeader:{
  flex: 0.2,
  marginTop:27,
  marginBottom:7,
  marginRight:8,
  paddingRight:15,
  paddingLeft:100
 

},


avatar:{
flex: 1,
backgroundColor:'yellow'
},
textName:{
flex: (Platform.OS === 'ios') ? 1 : 0.9 ,
backgroundColor:'red'
},

selectShow:{
flex: 0.6,
backgroundColor:'green'
},
flatlistHorizontal:{
flex: (Platform.OS === 'ios') ? 2.2 : 2 ,
backgroundColor:'pink'
},
onlineButton:{
flex: 0.5,
backgroundColor:'red'
},
textInfo:{
flex: (Platform.OS === 'ios') ? 1.8 : 1.6 ,
backgroundColor:'pink'
},
});


export default TrainerProfile;