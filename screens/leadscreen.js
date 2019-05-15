import React from 'react';
import { Text, View, TextInput, TouchableHighlight, TouchableOpacity, ScrollView, Image, KeyboardAvoidingView } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';

import Dialog, { DialogContent } from 'react-native-popup-dialog';
import Icon from 'react-native-vector-icons/Ionicons';
import BgTracking from '../BgTracking';
import DatePicker from 'react-native-datepicker';
var styles = require('./../assets/css/style');

export default class LeadScreen extends React.Component {

    constructor(props) {
        super(props)
        this.state = { date: "2016-05-15", visible: false }
    }

    static navigationOptions = {
        tabBarLabel: 'Leads',
    }


    state = {
        visible: false,
        companyname: '',
        personname: '',
        phone: '',
        emailid: '',
        address: '',
        errorcompanyname: '',
        errorpersonname: '',
        errorphone: '',
        erroremailid: '',
        erroraddress: '',

    };

    closemodal = () => {
        this.setState({ visible: false });
    }

    logOut = () => {

        this.setState({ visible: false });
        this.props.navigation.push('LoginScreen');
    }

    closeActivityIndicator = () => setTimeout(() => this.setState({
        animating: false
    }), 60000)
    componentDidMount = () => this.closeActivityIndicator()

    Saveform = () => {

        let companyname = this.state.companyname;
        let personname = this.state.personname;
        let phone = this.state.phone;
        let emailid = this.state.emailid;
        let address = this.state.address;

        if (companyname == '') { this.setState({ errorcompanyname: '*Required' }); }
        else { this.setState({ errorcompanyname: '' }); }

        if (personname == '') { this.setState({ errorpersonname: '*Required' }); }
        else { this.setState({ errorpersonname: '' }); }

        if (phone == '') { this.setState({ errorphone: '*Required' }); }
        else { this.setState({ errorphone: '' }); }

        if (emailid == '') { this.setState({ erroremailid: '*Required' }); }
        else { this.setState({ erroremailid: '' }); }

        if (address == '') { this.setState({ erroraddress: '*Required' }); }
        else { this.setState({ erroraddress: '' }); }

        if (companyname != "" && personname != "" && phone != "" && emailid != "" && address != "") {
            alert('success');
        }
    }

    render() {
        return (
            <KeyboardAvoidingView style={{ flex: 1, justifyContent: 'center', }} enabled >

                <View style={styles.headerbox}>

                    <View style={{ 'width': 250 }}>
                        <Text style={styles.headerleadstext}> LEADS  </Text>
                    </View>

                    <View style={{ 'width': 100 }}>
                        <TouchableOpacity onPress={() => {
                            this.setState({ visible: true });
                        }}><Icon style={styles.logouticon} name="ios-power" size={20} color="white" /></TouchableOpacity>
                    </View>

                </View>

                <ScrollView style={{ backgroundColor: "#eaeaea" }}>
                    <View style={styles.container}>



                        <View style={styles.SectionStyle}>

                            <Image source={require('../assets/images/company.png')} style={styles.ImageStyle} />


                            <TextInput style={styles.textinputsize} placeholder="Company Name" onChangeText={(companyname) => this.setState({ companyname })} />

                            <Text style={{ fontSize: 10, color: 'red', textAlign: 'left' }}> {this.state.errorcompanyname}</Text>
                        </View>

                        <View style={styles.SectionStyle}>

                            <Image source={require('../assets/images/user.png')} style={styles.ImageStyle} />

                            <TextInput style={styles.textinputsize} placeholder="Contact Person Name :" onChangeText={(personname) => this.setState({ personname })} />

                            <Text style={{ fontSize: 10, color: 'red', textAlign: 'left' }}> {this.state.errorpersonname}</Text>
                        </View>

                        <View style={styles.SectionStyle}>

                            <Image source={require('../assets/images/phone.png')} style={styles.ImageStyle} />
                            <TextInput style={styles.textinputsize} placeholder="Phone 1 :" keyboardType='numeric' maxLength={12} onChangeText={(phone) => this.setState({ phone })} />

                            <Text style={{ fontSize: 10, color: 'red', textAlign: 'left' }}> {this.state.errorphone}</Text>
                        </View>

                        <View style={styles.SectionStyle}>

                            <Image source={require('../assets/images/phone.png')} style={styles.ImageStyle} />
                            <TextInput style={styles.textinputsize} placeholder="Phone 2 :" keyboardType='numeric' maxLength={12} onChangeText={(phone) => this.setState({ phone })} />

                            <Text style={{ fontSize: 10, color: 'red', textAlign: 'left' }}> {this.state.errorphone}</Text>
                        </View>

                        <View style={styles.SectionStyle}>
                            <Image source={require('../assets/images/designation.png')} style={styles.ImageStyle} />
                            <TextInput style={styles.textinputsize} placeholder="Designation :" onChangeText={(phone) => this.setState({ phone })} />
                        </View>

                        <View style={styles.SectionStyle}>

                            <Image source={require('../assets/images/email.png')} style={styles.ImageStyle} />
                            <TextInput style={styles.textinputsize} placeholder="Email ID :" onChangeText={(emailid) => this.setState({ emailid })} />
                            <Text style={{ fontSize: 10, color: 'red', textAlign: 'left' }}> {this.state.erroremailid}</Text>
                        </View>

                        <View style={styles.SectionStyle}>

                            <DatePicker style={styles.datepicker} date={this.state.date} mode="date" placeholder="select date" format="YYYY-MM-DD" minDate="2019-01-01"
                                maxDate="2019-09-01"
                                confirmBtnText="Confirm"
                                cancelBtnText="Cancel"
                                customStyles={{
                                    dateIcon: {
                                        position: 'absolute',
                                        left: 0,
                                        top: 4,
                                        marginLeft: 0
                                    },
                                    dateInput: {
                                        marginLeft: 36,
                                        borderWidth: 0,
                                    },
                                    dateText: {
                                        fontSize: 10,
                                        color: "#616161",
                                        textAlign: "left"
                                    }
                                }}
                                onDateChange={(date) => { this.setState({ date: date }) }}
                            />
                        </View>

                        <View style={styles.SectionStyle1}>

                            <Image source={require('../assets/images/address.png')} style={styles.ImageStyle} />

                            <TextInput style={styles.textinputsize} placeholder="Address :" numberOfLines={4} multiline={true} onChangeText={(address) => this.setState({ address })} />

                            <Text style={{ fontSize: 10, color: 'red', textAlign: 'left' }}> {this.state.erroraddress}</Text>
                        </View>

                        <View style={styles.SectionStyle1}>

                            <Image source={require('../assets/images/comments.png')} style={styles.ImageStyle} />

                            <TextInput style={styles.textinputsize} placeholder="Comments :" numberOfLines={4} multiline={true} onChangeText={(address) => this.setState({ address })} />

                            <Text style={{ fontSize: 10, color: 'red', textAlign: 'left' }}> {this.state.erroraddress}</Text>
                        </View>


                        <TouchableHighlight style={styles.saveButton} onPress={this.Saveform}>

                            <Text style={styles.loginButtontxt}>
                                {"Save"}

                            </Text>

                        </TouchableHighlight>

                        <View style={styles.container}>
                            <BgTracking></BgTracking>
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
                                                    {"Cancel"}

                                                </Text>

                                            </TouchableOpacity >
                                        </View>

                                        <View style={styles.inputWrap}>
                                            <TouchableOpacity style={styles.logoutButton} onPress={this.logOut} >

                                                <Text style={styles.logoutButtontxt}>
                                                    {"Confirm"}

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