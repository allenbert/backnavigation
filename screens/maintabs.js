import React from 'react';
import { Text, View, TouchableWithoutFeedback } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';

import LeadScreen from './leadscreen';
import LeadsView from './leadsview';
import MapScreen from './mapscreen';

var styles = require('./../assets/css/style');

export default createBottomTabNavigator({
  Leads: { screen: LeadScreen, },
  View: { screen: LeadsView },
  Map: { screen: MapScreen },
}, {

    tabBarComponent: ({ navigation }) => {
      let index = navigation.state.index;

      // console.log(index);
      const aBC = '#f2f5f7';
      const skyblue = '#0facec';
      return (
        <View style={{ flexDirection: 'row', height: 50, backgroundColor: 'white' }}>

          <TouchableWithoutFeedback style={styles.touchableStyle} onPress={() => { navigation.navigate('Leads') }}>
            <View style={[{ borderTopColor: index === 0 ? 'orange' : aBC, borderWidth: index === 0 ? 3 : 1 }, styles.touchableView]}>

              {/* <Ionicons name={'ios-paper'} size={22} color={'#929292'} style={{marginTop:3, color : index === 0 ? skyblue : '#929292' }}/> */}
              <Text style={{ fontSize: 12, color: index === 0 ? skyblue : '#929292' }}>Leads</Text>
            </View>
          </TouchableWithoutFeedback>


          <TouchableWithoutFeedback style={styles.touchableStyle} onPress={() => { navigation.navigate('View') }}>
            <View style={[{ borderTopColor: index === 1 ? 'orange' : aBC, borderWidth: index === 1 ? 3 : 1 }, styles.touchableView]}>
              {/* <Ionicons name={'ios-eye'} size={22} color={'#929292'} style={{marginTop:3, color : index === 1 ? skyblue : '#929292'}} /> */}
              <Text style={{ fontSize: 12, color: index === 1 ? skyblue : '#929292' }}>View</Text>
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback style={styles.touchableStyle} onPress={() => { navigation.navigate('Map') }}>
            <View style={[{ borderTopColor: index === 2 ? 'orange' : aBC, borderWidth: index === 2 ? 3 : 1 }, styles.touchableView]}>
              {/* <Ionicons name={'ios-locate'} size={22} color={'#929292'} style={{marginTop:3, color : index === 2 ? skyblue : '#929292'}} /> */}
              <Text style={{ fontSize: 12, color: index === 2 ? skyblue : '#929292' }}>Tracking</Text>
            </View>
          </TouchableWithoutFeedback>

        </View>
      )
    },
    tabBarPosition: 'bottom',
  });
