import React from 'react';
import { Image, ImageBackground, KeyboardAvoidingView, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
var s = require('./../assets/css/style');

export default class Login extends React.Component {

  state = {
    email: '',
    password: '',
    isEmailValid: true,
    isPasswordValid: true,

  };

  validateEmail = () => {
    const { email } = this.state;
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const solution = regex.test(email);
    this.setState({ isEmailValid: solution })
  }

  validatePassword = () => {
    const { password } = this.state;
    const solution = password.length >= 8;
    this.setState({ isPasswordValid: solution });
  }

  //On click of submit button alert will appear
  logIn = () => {

    let email = this.state.email
    let password = this.state.password
    let pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if (email == '') {
      alert("Please enter Password");
      return false;
    }
    else if (password == '') {
      alert("Please enter Email or Password");
      return false;
    }

    this.props.navigation.push('TabsScreen');

    // getAccessToken(email, password).then(res => {
    //   debugger;
    //   if (!res.error) {
    //     debugger;
    //     AsyncStorage.setItem("Token", JSON.stringify(res))
    //       .then(() => {
    //         this.props.navigation.push('TabsScreen');
    //       });
    //   }
    //   else {
    //     alert("Access Denied: Incorrect Username or Password");
    //   }
    // }).catch(err => {
    //   debugger;
    //   var message = String(JSON.parse(err._bodyText).message);
    //   alert(message.substr(0, message.indexOf(':')));
    // })
  }

  // if (email != '' && password != '') {

  //   if (pattern.test(String(email).toLowerCase())) {
  //     getAccessToken(email, password).then(res => {
  //       debugger;
  //     })


  //     //this.props.navigation.push('TabsScreen');
  //     return true;
  //   }
  //   else {
  //     alert('Invalid Email ID');
  //   }
  // }
  //}

  render() {

    const { email, password, isEmailValid, isPasswordValid } = this.state;
    const isFormValid = email && password && isEmailValid && isPasswordValid;

    return (

      <ScrollView style={{ backgroundColor: '#8a8a8a' }}>
        <ImageBackground source={require('./../assets/login_bg.png')} style={s.backgroundImage}>
          <KeyboardAvoidingView style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', }} enabled >
            <View style={s.container}>
              <Image source={require('../assets/images/login_logo.png')} style={s.login_logo} />
              <Text style={s.login_heading}>{'Login'.toUpperCase()}</Text>

              <View style={s.SectionStyle}>

                <TextInput style={s.logintextinput} placeholder="User Name"
                  onChangeText={(email) => this.setState({ email })} autoCapitalize="none" />
                <Image source={require('../assets/images/user.png')} style={s.login_ImageStyle} />

              </View>


              <View style={s.SectionStyle}>


                <TextInput style={s.logintextinput} secureTextEntry={true} placeholder="Password"
                  onChangeText={(password) => this.setState({ password })}
                />
                <Image source={require('../assets/images/password.png')} style={s.login_ImageStyle} />

              </View>


              <TouchableOpacity style={s.loginButton} onPress={this.logIn} >

                <Text style={s.loginButtontxt}>
                  Login

            </Text>


              </TouchableOpacity >

              <Text style={s.forg_pass} onPress={() => this.props.navigation.push('ForgotPassScreen')}>Forgot Password?</Text>

            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </ScrollView>

    );
  }
}
