import React from 'react';
import { Text, View, TextInput, TouchableOpacity, ScrollView, Image, KeyboardAvoidingView } from 'react-native';

import Dialog, { DialogContent } from 'react-native-popup-dialog';
import Icon from 'react-native-vector-icons/Ionicons';
var styles = require('./../assets/css/style');

export default class LeadsView extends React.Component {

    static navigationOptions = {
        tabBarLabel: 'View',
    }


    state = {
        visible: false,

        searchtext: "",
    };

    closemodal = () => {

        this.setState({ visible: false });

    }


    logOut = () => {

        this.setState({ visible: false });
        this.props.navigation.push('LoginScreen');
    }


    searchbox = () => {
        const n1 = this.state.searchtext;
        alert(n1);

    }
    render() {


        return (
            <KeyboardAvoidingView style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', }} behavior="padding" enabled >

                <View style={styles.headerbox}>

                    <View style={{ 'width': 250 }}>
                        <Text style={styles.headerviewtext}> VIEW LEADS  </Text>
                    </View>

                    <View style={{ 'width': 100 }}>
                        <TouchableOpacity onPress={() => {
                            this.setState({ visible: true });
                        }}><Icon style={styles.logouticon} name="ios-power" size={20} color="white" /></TouchableOpacity>
                    </View>

                </View>


                <ScrollView>
                    <View style={styles.view_container}>

                        <View style={styles.view_searchSection}>

                            <TextInput style={styles.view_input} onChangeText={searchtext => this.setState({ searchtext })} placeholder="Search Here" />

                            <TouchableOpacity onPress={this.searchbox} style={{ paddingLeft: 10, paddingRight: 5 }} >
                                <Icon style={styles.searchIcon} name="ios-search" size={24} color="#000" />
                            </TouchableOpacity>
                        </View>





                        <View style={styles.view_tabheader}>

                            <View style={styles.columnView1}>

                                <Image source={require('../assets/images/company_white.png')} style={styles.ImageStyle} />

                            </View>


                            <View style={styles.columnView2}>
                                <Text style={styles.view_tabheadertxt}>Shakunth Aqua Products</Text>
                            </View>

                        </View>



                        <View style={styles.rowView}>

                            <View style={styles.columnView1}>
                                <Image source={require('../assets/images/user.png')} style={styles.ImageStyle} />


                            </View>

                            <View style={styles.columnView2}>
                                <Text style={styles.Leadname}>Mr. Venkatraman</Text>
                            </View>
                        </View>

                        <View style={styles.rowView}>

                            <View style={styles.columnView1}>
                                <Image source={require('../assets/images/phone.png')} style={styles.ImageStyle} />

                            </View>

                            <View style={styles.columnView2}>
                                <Text style={styles.Leadphone}>098400 67915</Text>
                            </View>
                        </View>

                        <View style={styles.rowView}>

                            <View style={styles.columnView1}>
                                <Image source={require('../assets/images/email.png')} style={styles.ImageStyle} />

                            </View>

                            <View style={styles.columnView2}>
                                <Text style={styles.Leademail}>shakunthaqua@gmail.com</Text>
                            </View>

                        </View>

                        <View style={styles.rowView}>

                            <View style={styles.columnView1}>
                                <Image source={require('../assets/images/address.png')} style={styles.ImageStyle} />

                            </View>

                            <View style={styles.columnView2}>
                                <Text style={styles.Leadaddress}>No.30-A, vannagaram Road, Near Amb Industrial Estate ,2nd Extension, Gandhi Nagar,Ambattur Industrial Estate, Chennai, Tamil Nadu 600058</Text>
                            </View>

                        </View>

                        <View style={styles.view_tabheader}>

                            <View style={styles.columnView1}>

                                <Image source={require('../assets/images/company_white.png')} style={styles.ImageStyle} />

                            </View>


                            <View style={styles.columnView2}>
                                <Text style={styles.view_tabheadertxt}>Divyam Nursery & Primary School</Text>
                            </View>

                        </View>



                        <View style={styles.rowView}>

                            <View style={styles.columnView1}>
                                <Image source={require('../assets/images/user.png')} style={styles.ImageStyle} />


                            </View>

                            <View style={styles.columnView2}>
                                <Text style={styles.Leadname}>Mr. Venkatraman</Text>
                            </View>
                        </View>

                        <View style={styles.rowView}>

                            <View style={styles.columnView1}>
                                <Image source={require('../assets/images/phone.png')} style={styles.ImageStyle} />

                            </View>

                            <View style={styles.columnView2}>
                                <Text style={styles.Leadphone}>098400 67915</Text>
                            </View>
                        </View>

                        <View style={styles.rowView}>

                            <View style={styles.columnView1}>
                                <Image source={require('../assets/images/email.png')} style={styles.ImageStyle} />

                            </View>

                            <View style={styles.columnView2}>
                                <Text style={styles.Leademail}>shakunthaqua@gmail.com</Text>
                            </View>

                        </View>

                        <View style={styles.rowView}>

                            <View style={styles.columnView1}>
                                <Image source={require('../assets/images/address.png')} style={styles.ImageStyle} />

                            </View>

                            <View style={styles.columnView2}>
                                <Text style={styles.Leadaddress}>No.30-A, vannagaram Road, Near Amb Industrial Estate ,2nd Extension, Gandhi Nagar,Ambattur Industrial Estate, Chennai, Tamil Nadu 600058</Text>
                            </View>

                        </View>



                    </View>






                    <View style={styles.container}>

                        <Dialog
                            visible={this.state.visible}
                            onTouchOutside={() => {
                                this.setState({ visible: false });
                            }}
                        >
                            <DialogContent >

                                <View style={styles.dialogwidth}>
                                    <View style={styles.dialogcontent}>
                                        <Text style={{ fontSize: 18, fontWeight: 'bold', paddingBottom: 5, }}>Logout</Text>
                                        <Text>Are you sure want to confirm?</Text>
                                    </View>


                                    <View style={styles.row}>
                                        <View style={styles.inputWrap}>
                                            <TouchableOpacity style={styles.logoutButton} onPress={this.closemodal} >

                                                <Text style={styles.logoutButtontxt}>
                                                    Cancel

            </Text>

                                            </TouchableOpacity >
                                        </View>

                                        <View style={styles.inputWrap}>
                                            <TouchableOpacity style={styles.logoutButton} onPress={this.logOut} >

                                                <Text style={styles.logoutButtontxt}>
                                                    Confirm

            </Text>
                                            </TouchableOpacity >
                                        </View>
                                    </View>

                                </View>
                            </DialogContent>
                        </Dialog>
                    </View>



                </ScrollView>
            </KeyboardAvoidingView>


        );
    }
}