
import React from 'react';
import { Text, View, Dimensions, TouchableOpacity, StyleSheet, Image, KeyboardAvoidingView } from 'react-native';

import Dialog, { DialogContent } from 'react-native-popup-dialog';
import Icon from 'react-native-vector-icons/Ionicons';

import Drawer from './trackingdrawer';
import Tracking from './tracking';
import MapView from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 37.771707;
const LONGITUDE = -122.4053769;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const GOOGLE_MAPS_APIKEY = 'AIzaSyD93iK5lcsO4MervBL3kvp_LoKYfj40rFo';
var styles = require('./../assets/css/style');

export default class MapScreen extends React.Component {


    constructor(props) {
		super(props);

		this.state = {
			coordinates: [
				{
					latitude: 13.041206, 
                    longitude: 80.233083,
                    title: 1,
				},
				{
					latitude: 13.065024, 
                    longitude: 80.202541,
                    title: 2,
                },
                {
					latitude: 13.074924,
                    longitude: 80.222853,
                    title: 3,
                },
                {
					latitude: 13.085003, 
                    longitude: 80.208577,
                    title: 4,
				},
			],
		};

		this.mapView = null;
	}

    static navigationOptions = {
        tabBarLabel: 'TRACKING',
    }
    state = {
        visible: false,
    };

    closemodal = () => {

        this.setState({ visible: false });

    }

    logOut = () => {

        this.setState({ visible: false });
        this.props.navigation.push('LoginScreen');
    }

    onMapPress = (e) => {
		if (this.state.coordinates.length == 3) {
			this.setState({
				coordinates: [
					e.nativeEvent.coordinate,
				],
			});
		} else {
			this.setState({
				coordinates: [
					...this.state.coordinates,
					e.nativeEvent.coordinate,
				],
			});
		}
    }
    
    // onReady = (result) => {
	// 	this.mapView.fitToCoordinates(result.coordinates, {
	// 		edgePadding: {
	// 			right: (width / 20),
	// 			bottom: (height / 20),
	// 			left: (width / 20),
	// 			top: (height / 20),
	// 		}
	// 	});
	// }

	// onError = (errorMessage) => {
	// 	Alert.alert(errorMessage);
	// }

    render() {       
        return (
            <KeyboardAvoidingView style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', }} behavior="padding" enabled >

                <View style={styles.headerbox}>

                    <View style={{ 'width': 250 }}>
                        <Text style={styles.headerviewtext}> TRACKING  </Text>
                    </View>

                    <View style={{ 'width': 100 }}>
                        <TouchableOpacity onPress={() => {
                            this.setState({ visible: true });
                        }}><Icon style={styles.logouticon} name="ios-power" size={20} color="white" /></TouchableOpacity>
                    </View>

                </View>
               
                <View style={styles.Mapcontainer}>
                    <MapView
                        // initialRegion={{
                        //     latitude: LATITUDE,
                        //     longitude: LONGITUDE,
                        //     latitudeDelta: LATITUDE_DELTA,
                        //     longitudeDelta: LONGITUDE_DELTA,
                        // }}
                        style={StyleSheet.absoluteFill}
                        ref={c => this.mapView = c} // eslint-disable-line react/jsx-no-bind
                        onPress={this.onMapPress}
                        loadingEnabled={true}
                    >
                        {this.state.coordinates.map((coordinate, index) =>
                            <MapView.Marker key={`coordinate_${index}`} coordinate={coordinate} title={"teSts"}/> // eslint-disable-line react/no-array-index-key
                        )}
                        {(this.state.coordinates.length) && (
                            <MapViewDirections
                                origin={this.state.coordinates[0]}
                                waypoints={ (this.state.coordinates.length > 2) ? this.state.coordinates.slice(1, -1): null}
                                destination={this.state.coordinates[this.state.coordinates.length-1]}
                                // origin={this.state.coordinates[0]}
                                // waypoints={this.state.coordinates[1]}
                                // destination={this.state.coordinates[2]}
                                apikey={GOOGLE_MAPS_APIKEY}
                                strokeWidth={3}
                                strokeColor="hotpink"
                                onReady={this.onReady}
                            //onError={this.onError}
                            optimizeWaypoints={true}
                            onStart={(params) => {
                                console.log(`Started routing between "${params.origin}" to "${params.waypoints}" and "${params.destination}"`);
                              }}
                              onReady={(result) => {
                                this.mapView.fitToCoordinates(result.coordinates, {
                                  edgePadding: {
                                    right: (width / 20),
                                    bottom: (height / 20),
                                    left: (width / 20),
                                    top: (height / 20),
                                  }
                                });
                              }}
                            />
                        )}
                    </MapView>
                    <Drawer
                        isOpen={true}
                        // header={'Basket'}
                        headerHeight={70}
                        teaserHeight={75}
                    >
                     <Tracking />
                    </Drawer>
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
                                    <Text>{"Are you sure want to confirm?"}</Text>
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


            </KeyboardAvoidingView>
        )
    }

}