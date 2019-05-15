import React from 'react';
import { StyleSheet, Text, View, Image, Button, TextInput, ImageBackground, AppRegistry,TouchableOpacity,TouchableHighlight ,KeyboardAvoidingView,ScrollView,Alert} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
var s = require('./../assets/css/style');


export default class ForgotPass extends React.Component {

 state = {
 	  email: '',
 	  message : false,
 	  btndisable: false,
 }

ResetPassword = () => {

  let email = this.state.email;
    let pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/


if (email != '')
  {
  
if(pattern.test(String(email).toLowerCase()))
{
   // this.props.navigation.push('TabsScreen');

this.setState({message:true});

// this.setState({btndisable:true});
  
}
else
{
  alert('Invalid Email ID');
}
  }
  else	
  {
  	alert('Enter Email ID');

  }



	}



 render() {
    return (
      <View style={s.container}>
     
     <View style={{alignItems: 'center',flexDirection: 'row',paddingLeft: 15,paddingRight: 15,paddingBottom:10,paddingTop:10}}>
     <Text style={{fontSize:14,}}>Enter Your E-mail address and we will send you a link to reset your password.</Text>

</View>
<View style={styles.passwordSection}>
          <TextInput  style={styles.passtextinput} placeholder="Enter Email Id" onChangeText={(email) => this.setState({email})}/>
        
        </View>

           <TouchableOpacity style={styles.submitButton}   onPress={this.ResetPassword} disabled={this.state.btndisable} >
        
            <Text style={styles.submitButtontxt}>
             Submit

            </Text>
        
      </TouchableOpacity >

{ this.props.hello && <View>{this.message}</View> }
       <View >
      <Text style={{color:'red',textAlign:'left',paddingTop:10}}>   {this.state.message ? 'Email Sent Sucessfully !!' : ''}  </Text>
        </View>
      </View>
      );
  }
}


const styles = StyleSheet.create({

passwordSection: {
  
   flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
      height: 40,
    backgroundColor: '#ffffff',
    paddingLeft: 15,
    paddingRight: 15,
    width: '90%',
    marginBottom: 15,
  },
 passtextinput:
  {
     flex: 1,
       fontSize:16,
       color:'#616161',
  },

  submitButton: {
    backgroundColor: '#ff7e00',
    height:40,
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
},


submitButtontxt: {
   color:'white',
   fontSize:20,
  
},

});


