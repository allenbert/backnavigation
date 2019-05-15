import React from 'react';
import { Modal, StyleSheet, Text, View, TextInput, TouchableHighlight, Alert, Dimensions, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Dialog, { DialogContent } from 'react-native-popup-dialog';

var s = require('./../assets/css/style');



export default class LeadsPage extends React.Component {

  state = {
    visible: false,
  };

  closemodal = () => {

    this.setState({ visible: false });

  }


  logOut = () => {

    this.props.navigation.push('LoginScreen');
  }

  render() {
    return (

      <View style={s.container}>
        <Button
          title="Show Dialog"
          onPress={() => {
            this.setState({ visible: true });
          }}
        />
        <Dialog
          visible={this.state.visible}
          onTouchOutside={() => {
            this.setState({ visible: false });
          }}
        >
          <DialogContent >

            <View style={s.dialogwidth}>
              <View style={s.dialogcontent}>
                <Text style={{ fontSize: 18, fontWeight: 'bold', paddingBottom: 5, }}>Logout</Text>
                <Text>Are you sure want to confirm?</Text>
              </View>


              <View style={styles.row}>
                <View style={styles.inputWrap}>
                  <TouchableHighlight style={s.logoutButton} onPress={this.closemodal} >

                    <Text style={s.logoutButtontxt}>
                      Cancel

            </Text>

                  </TouchableHighlight >
                </View>

                <View style={styles.inputWrap}>
                  <TouchableHighlight style={s.logoutButton} onPress={this.logOut} >

                    <Text style={s.logoutButtontxt}>
                      Confirm

            </Text>
                  </TouchableHighlight >
                </View>
              </View>

            </View>
          </DialogContent>
        </Dialog>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: "row"
  },
  inputWrap: {
    flex: 1,
    // borderColor: "#cccccc",
    // borderBottomWidth: 1,
    marginBottom: 10
  },
  inputdate: {
    fontSize: 14,
    marginBottom: -12,
    color: "#6a4595"
  },
  inputcvv: {
    fontSize: 14,
    marginBottom: -12,
    color: "#6a4595"
  }
});