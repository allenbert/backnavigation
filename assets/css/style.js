'use strict';

var React = require('react-native');

var {
    StyleSheet,
} = React;

module.exports = StyleSheet.create({

    container: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 20,
    },

    logo: {
        marginTop: 50,
    },

    backgroundImage: {
        flex: 1,
        width: null,
        height: null,
        paddingTop: '10%',
        paddingBottom: '10%',
        resizeMode: 'cover',
        backgroundColor: '#8a8a8a',
    },

    login_logo: {
        marginTop: 20,
        marginBottom: 160,
    },

    login_heading: {
        fontSize: 30,
        paddingBottom: 20,
        color: '#000e3b',
    },

    datepicker: {
        borderWidth: 0,
        width: '100%',
        borderColor: '#FFF',
    },

    login_input: {
        height: 50,
        backgroundColor: '#ffffff',
        paddingLeft: 15,
        paddingRight: 15,
        width: '90%',
        fontSize: 20,
        marginBottom: 20,
    },

    fullWidthButton: {
        backgroundColor: '#ff7e00',
        height: 50,
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    fullWidthButtonText: {
        fontSize: 24,
        color: 'white',
    },

    loginButton: {
        backgroundColor: '#ff7e00',
        height: 50,
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },


    loginButtontxt: {
        color: 'white',
        fontSize: 20,

    },


    forg_pass: {
        color: 'black',
        paddingTop: 20,
        width: '90%',
        textAlign: 'left',
    },

    textArea: {

        height: 100,
        backgroundColor: '#ffffff',
        paddingLeft: 15,
        paddingRight: 15,
        width: '90%',
        fontSize: 20,
        //marginBottom: 20,
        margin: 0,
    },

    saveButton: {
        backgroundColor: '#ff7e00',
        height: 50,
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },


    searchSection: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    searchIcon: {
        padding: 10,
        paddingLeft: 20,
        marginRight: 25,
    },
    input: {
        flex: 1,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 0,
        backgroundColor: '#fff',
        color: '#424242',
    },


    // view_input: {
    //     height: 30,
    //     backgroundColor: '#ffffff',
    //     paddingLeft: 20,
    //     paddingRight: 20,
    //     width: '90%',
    //     fontSize: 14,
    //     marginTop:10,
    //     paddingTop: 1,
    //   paddingBottom: 5,

    //   },
    view_input: {


        height: 50,
        backgroundColor: '#ffffff',
        paddingLeft: 90,
        width: '100%',
        fontSize: 15,
        paddingTop: 5,
        paddingBottom: 5,
    },

    view_searchSection: {
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    view_container:
    {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 0,
    },

    view_SectionBox:
    {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
        width: '90%',
        backgroundColor: '#ffffff',
        padding: 10,
        flexWrap: 'wrap',



    },
    view_tabheader:
    {
        flexDirection: 'row',
        marginTop: 20,
        backgroundColor: '#ff7e00',
        width: '90%',
        padding: 15,
        //height: 100,
        justifyContent: 'center',
        alignItems: 'center'

    },
    view_tabheadertxt:
    {
        color: 'white',
        fontWeight: 'bold',
        padding: 5,
        fontSize: 18,
    }
    ,
    view_contentblock:
    {
        justifyContent: 'center',
        alignItems: 'center'
    },
    view_contenttxt:
    {
        fontSize: 24,
        width: '90%',
        marginLeft: 20
    },
    view_icon: {

        width: '20%',
        //marginLeft:20,
        //marginRight:60,
        backgroundColor: 'orange',
    },

    rowView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'stretch',
        width: '90%',
        backgroundColor: '#ffffff',
        padding: 10,
        flexWrap: 'wrap',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1
    },

    columnView1: {
        flexDirection: 'column',
        width: '20%'
    },

    columnView2: {
        flexDirection: 'column',
        width: '80%',

    },
    iconview: {

        paddingLeft: 10,
        paddingTop: 6,
        color: '#adadad',
    },


    hrline:
    {
        borderBottomColor: '#c7c7c7',
        borderBottomWidth: 2,
        marginBottom: 5,
        flexDirection: 'column',
        width: '100%',
    },

    SectionStyle: {

        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 65,
        backgroundColor: '#ffffff',
        paddingLeft: 15,
        paddingRight: 15,
        width: '90%',
        fontSize: 20,
        marginBottom: 15,
    },

    SectionStyle1: {

        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        backgroundColor: '#ffffff',
        paddingLeft: 15,
        paddingRight: 15,
        width: '90%',
        fontSize: 20,
        marginBottom: 15,
    },

    ImageStyle: {
        paddingLeft: 10,
        paddingRight: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
        alignItems: 'center',
    },

    login_ImageStyle: {
        // paddingRight: 10,
        //  paddingLeft: 10,
        // margin: 5,
        // alignItems: 'center',
        // borderLeftColor:'#f7efef',
        //   borderLeftWidth:1,
        //    resizeMode: 'stretch',
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
        alignItems: 'center',
    },

    textinputsize:
    {
        flex: 1,
        fontSize: 10,
        color: '#616161',
        paddingLeft: 10,
    },
    textareasize:
    {
        flex: 1,
        height: 100,
        fontSize: 10,
        color: '#616161',
        paddingLeft: 10,
    },
    logintextinput:
    {
        flex: 1,
        fontSize: 18,
        color: '#616161',
    },

    Leadname:
    {
        padding: 5,
        fontWeight: '500',
        fontSize: 16,
    },
    Leademail:
    {
        padding: 5,
        fontWeight: '500',
        fontSize: 16,
    },
    Leadphone:
    {
        padding: 5,
        color: '#0facec',
        fontSize: 16,
    },
    Leadaddress:
    {
        padding: 5,
        fontSize: 16,
    },

    headerbox:
    {

        //padding: 20,
        backgroundColor: '#0095ff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 20,
        //paddingLeft: 40,
        paddingBottom: 15,
        flexDirection: 'row',
        // height:40,
    },

    headerleadstext:
    {

        fontSize: 24,
        color: 'white',
        paddingLeft: 60,
        // paddingRight:20,
        paddingTop: 5,
        marginLeft: 60,

    },
    headerviewtext:
    {

        fontSize: 24,
        color: 'white',
        paddingLeft: 30,
        // paddingRight:20,
        paddingTop: 10,
        marginLeft: 60,

    },
    logouticon:
    {
        paddingLeft: 70,
        fontSize: 30,
        paddingTop: 10,
    },

    modal_container: {
        flexDirection: 'row',
        alignSelf: 'flex-start'
    },
    dialogwidth:
    {

        width: 300,
        height: 100,
        padding: 10,
        paddingBottom: 20,
        paddingTop: 20,
    },
    dialogcontent:
    {

        alignItems: 'center',
    },
    logoutButton: {
        // backgroundColor: '#e7e7e7',
        // borderWidth: 1,
        height: 30,
        marginTop: 10,
        padding: 10,
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoutButtontxt: {
        color: '#0facec',
        fontSize: 18,
        paddingTop: 10,
        fontWeight: '400'

    },
    tabBarSelectedItemStyle: {
        borderTopWidth: 2,
        borderTopColor: 'red',
    },

    //Main Tabs
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
    },

    touchableStyle: {
        // position: 'absolute',
        // height: '100%',


    },
    touchableView: {
        flexDirection: 'column',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#fbfbfb',
        paddingLeft: 6,
        paddingRight: 6,

    },
    Mapcontainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // paddingTop: Constants.statusBarHeight,
        backgroundColor: 'white',
    },

    imageprofile:
    {
        // height: 100, width: 100, 
        // padding:15, 
        // borderRadius: 100/2,
        //  marginLeft: "auto",
        //   marginRight: "auto",
        // marginTop:50,

        width: 100,
        height: 100,
        borderRadius: 100 / 2,
        // borderWidth: 4,
        borderColor: "white",
        marginBottom: 10,
        alignSelf: 'center',
        position: 'absolute',
        zIndex: 1
        //marginTop:130
    },

    //Map

    mapContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    }
});
