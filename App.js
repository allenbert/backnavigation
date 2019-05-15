/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, AppRegistry, YellowBox, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import LoginPage from './screens/login';
import LeadsPage from './screens/leads';
import MainTabs from './screens/maintabs';
import ForgotPassPage from './screens/forgotpass';

import LocationServices from './services/LocationServices'


// export default class App extends Component {

//   constructor() {
//     super();
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <BgTracking></BgTracking>
//       </View>
//     );
//   }
// }

YellowBox.ignoreWarnings(['Require cycle:']);
YellowBox.ignoreWarnings(['Setting a timer for a long period of time, i.e. multiple minutes,']);


const AppNavigator = createStackNavigator({
  LoginScreen: {
    screen: MainTabs,
    navigationOptions: {
      header: null
    }
  },
  //LeadsScreen: { screen: LeadsPage },
  ForgotPassScreen: {
    screen: ForgotPassPage, navigationOptions: {
      title: 'Forgot Password',
    }
  },
  TabsScreen: {
    screen: MainTabs, navigationOptions: {
      header: null,
    }
  }
}
);


const App = createAppContainer(AppNavigator);

export default App;


AppRegistry.registerComponent('App', () => App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
