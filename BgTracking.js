import React, { Component } from 'react';
import { Alert, View, Text, StyleSheet } from 'react-native';
import BackgroundGeolocation from 'react-native-mauron85-background-geolocation';
import LocationServices from './services/LocationServices';
import AnimateLoadingButton from 'react-native-animate-loading-button';
import { config } from './config/db';

class BgTracking extends Component {

  constructor() {
    super();
    this.state = {
      locations: {},
      region: {},
      currentRideId: 1,
      ButtonText: "Start Tracking",
      StartTracking: false,
      LoadButtonStyle: styles.StartTracking
    }
  }

  componentDidMount() {
    BackgroundGeolocation.configure({
      desiredAccuracy: BackgroundGeolocation.HIGH_ACCURACY,
      stationaryRadius: 50,
      distanceFilter: 50,
      debug: true,
      notificationTitle: 'Lead Track',
      notificationText: 'Enabled',
      startOnBoot: false,
      stopOnTerminate: true,
      locationProvider: BackgroundGeolocation.ACTIVITY_PROVIDER,
      interval: 3000,
      fastestInterval: 1200,
      activitiesInterval: 1000,
      stopOnStillActivity: false,
      url: 'http://192.168.81.15:3000/location',
      httpHeaders: {
        'X-FOO': 'bar'
      },
      // customize post properties
      postTemplate: {
        lat: '@latitude',
        lon: '@longitude',
        foo: 'bar' // you can also add your own properties
      }
    });

    BackgroundGeolocation.on('location', (location) => {
      console.log('Location: ', location);
      console.log(location);


      fetch('https://maps.googleapis.com/maps/api/geocode/json?address=' + location.latitude + ',' + location.longitude + '&key=AIzaSyD93iK5lcsO4MervBL3kvp_LoKYfj40rFo')
        .then((response) => response.json())
        .then((responseJson) => {
          let obj = {
            userId: 1,
            location: location,
            formatted_address: responseJson.results[0].formatted_address
          }
          LocationServices.addItem(obj);
        });





      // API.update(this.state.currentRideId, {
      //   longitude: location.longitude,
      //   latitude: location.latitude,
      // });

      // handle your locations here
      // to perform long running operation on iOS
      // you need to create background task
      BackgroundGeolocation.startTask(taskKey => {
        // execute long running task
        // eg. ajax post location
        // IMPORTANT: task has to be ended by endTask
        BackgroundGeolocation.endTask(taskKey);
      });
    });

    BackgroundGeolocation.on('stationary', (stationaryLocation) => {
      // handle stationary locations here
      Actions.sendLocation(stationaryLocation);
    });

    BackgroundGeolocation.on('error', (error) => {
      console.log('[ERROR] BackgroundGeolocation error:', error);
    });

    BackgroundGeolocation.on('start', () => {
      console.log('[INFO] BackgroundGeolocation service has been started');
    });

    BackgroundGeolocation.on('stop', () => {
      console.log('[INFO] BackgroundGeolocation service has been stopped');
    });

    BackgroundGeolocation.on('authorization', (status) => {
      console.log('[INFO] BackgroundGeolocation authorization status: ' + status);
      if (status !== BackgroundGeolocation.AUTHORIZED) {
        // we need to set delay or otherwise alert may not be shown
        setTimeout(() =>
          Alert.alert('App requires location tracking permission', 'Would you like to open app settings?', [
            { text: 'Yes', onPress: () => BackgroundGeolocation.showAppSettings() },
            { text: 'No', onPress: () => console.log('No Pressed'), style: 'cancel' }
          ]), 1000);
      }
    });

    BackgroundGeolocation.on('background', () => {
      console.log('[INFO] App is in background');
    });

    BackgroundGeolocation.on('foreground', () => {
      console.log('[INFO] App is in foreground');
    });

    BackgroundGeolocation.on('abort_requested', () => {
      console.log('[INFO] Server responded with 285 Updates Not Required');

      // Here we can decide whether we want stop the updates or not.
      // If you've configured the server to return 285, then it means the server does not require further update.
      // So the normal thing to do here would be to `BackgroundGeolocation.stop()`.
      // But you might be counting on it to receive location updates in the UI, so you could just reconfigure and set `url` to null.
    });

    BackgroundGeolocation.on('http_authorization', () => {
      console.log('[INFO] App needs to authorize the http requests');
    });

    BackgroundGeolocation.checkStatus(status => {
      console.log('[INFO] BackgroundGeolocation service is running', status.isRunning);
      console.log('[INFO] BackgroundGeolocation services enabled', status.locationServicesEnabled);
      console.log('[INFO] BackgroundGeolocation auth status: ' + status.authorization);

      // you don't need to check status before start (this is just the example)
      if (!status.isRunning) {

        //BackgroundGeolocation.start(); //triggers start on start event
      }

      BackgroundGeolocation.getCurrentLocation(lastLocation => {
        let region = this.state.region;
        const latitudeDelta = 0.01;
        const longitudeDelta = 0.01;
        region = Object.assign({}, lastLocation, {
          latitudeDelta,
          longitudeDelta
        });
        this.setState({ locations: [lastLocation], region });

        let obj = {
          userId: 1,
          location: lastLocation
        }

        //addItem(obj);

        //API.create("Test Driver", lastLocation, lastLocation);
      }, (error) => {
        setTimeout(() => {
          Alert.alert('Error obtaining current location', JSON.stringify(error));
        }, 100);
      });
    });

    // you can also just start without checking for status
    // BackgroundGeolocation.start();
  }

  componentWillUnmount() {
    // unregister all event listeners
    BackgroundGeolocation.removeAllListeners();
  }

  render() {
    return <View>
      <Text>{"Background Tracking"}</Text>
      <AnimateLoadingButton
        ref={c => (this.ToggeleButton = c)}
        width={300}
        height={50}
        borderRadius={4}
        onPress={() => this.onToggleStart()}
        title={this.state.ButtonText}
        color="#841584"
        style={this.state.LoadButtonStyle}

      />
    </View>
  }

  onToggleStart() {

    BackgroundGeolocation.checkStatus(status => {
      this.ToggeleButton.showLoading(true);
      if (!status.isRunning) {
        BackgroundGeolocation.start();
        this.sleep(2000).then(() => {
          this.setState({
            ButtonText: "Stop Tracking",
            StartTracking: true,
            LoadButtonStyle: styles.StartTracking
          });
          this.ToggeleButton.showLoading(false);
        });

      }
      else {
        BackgroundGeolocation.stop();
        console.log("Pause");
        this.sleep(2000).then(() => {
          console.log("Resume");
          this.setState({
            ButtonText: "Start Tracking",
            StartTracking: false,
            LoadButtonStyle: styles.StopTracking
          });
          this.ToggeleButton.showLoading(false);
        });
      }
    });
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

const styles = StyleSheet.create({
  StartTracking: {
    flex: 1,
    backgroundColor: "#00FF00",
    borderColor: "#555555",
    borderWidth: 0,
    borderRadius: 0,
    marginTop: 200,
    justifyContent: "flex-start"
  },
  StopTracking: {
    flex: 1,
    backgroundColor: "#FF0000",
    borderColor: "#555555",
    borderWidth: 0,
    borderRadius: 0,
    marginTop: 200,
    justifyContent: "flex-start"
  }
});

export default BgTracking;