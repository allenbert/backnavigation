import React, { PureComponent } from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import Timeline from 'react-native-timeline-listview';
import CalendarStrip from 'react-native-calendar-strip';
import LocationServices from '../services/LocationServices';
import { db } from '../config/db';

const { width, height } = Dimensions.get('window');

export default class Message extends PureComponent {


  constructor() {
    super();
    this.state = {
      locationData: [],
      timelineView: true,
      CalendarView: false,
    }
  }


  componentDidMount() {


    //this.getLocations(1);
  }

  getLocations = (userId) => {
    var timestampRange = LocationServices.getTimeStamp();
    var userRef = db.ref("userlocation/" + userId);
    userRef.orderByChild("time").startAt(timestampRange.start).endAt(timestampRange.end)
      .on("child_added", (data, prevChildKey) => {
        var data = data.val();
        alert(JSON.stringify(data));
        var locationObj = {
          time: LocationServices.convertTsToDt(data.time),
          title: "Location Captured",
          description: data.formatted_address,
          icon: require('./../assets/location.png')
        }
        this.setState(prevState => ({
          locationData: [...prevState.locationData, locationObj],
          timelineView: true,
          CalendarView: false
        }))

      });


  }

  // data = [
  //   { time: '08:00am', title: 'Reminder1', description: 'Old Street Circle,NewDelhi.', icon: require('./../assets/alert.png') },
  //   { time: '08:00am', title: 'Pick up', description: 'Shivaji Park, NewDelhi', icon: require('./../assets/location.png') },
  //   { time: '10:00pm', title: 'St Xaviers High School', description: 'Old Street Circle,NewDelhi.', icon: require('./../assets/school.png') },
  //   { time: '03.00pm', title: 'St Xaviers High School', description: 'Old Street Circle,NewDelhi.', icon: require('./../assets/school.png') },
  //   { time: '08:00am', title: 'Reminder1', description: 'Old Street Circle,NewDelhi.', icon: require('./../assets/alert.png') },
  //   { time: '05:00pm', title: 'drop', description: 'Old Street Circle,NewDelhi', icon: require('./../assets/location.png') },
  // ];


  Calendardata = [
    { time: 'Picked', title: '8.00 AM', description: 'Shivaji Park,old street,NewDelhi', icon: require('./../assets/location.png') },
    { time: 'Reached', title: '9.05 AM', description: 'At school', icon: require('./../assets/school.png') },
    { time: 'Left', title: '4.00 PM', description: 'From school', icon: require('./../assets/school.png') },
    { time: 'Dropped', title: '5.10 PM', description: 'Golden Circle,old street,NewDelhi', icon: require('./../assets/location.png') },


  ];


  TimePress = () => {

    this.setState({ timelineView: true, CalendarView: false });

  }

  CalendarPress = () => {


    this.setState({ timelineView: false, CalendarView: true });

  }


  render() {
    const { title, message } = this.props;


    return (
      <View style={styles.container}>
        <View style={{ marginTop: 20 }}>
          <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 20 }}> Sachin Parekh </Text>
          <Text style={{ textAlign: 'center', fontSize: 16, color: '#c8ccd0' }}>Class 10th B Division </Text>
        </View>
        <View style={styles.container1}>
          <TouchableOpacity onPress={this.TimePress}>
            <View style={styles.viewStyleOne}>
              <Image style={[styles.clockimg]} source={require('./../assets/time.png')} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.CalendarPress} >
            <View style={styles.viewStyleOne}>
              <Image style={[styles.clockimg]} source={require('./../assets/calendar.png')} />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.triangleWidth}>
          <View style={styles.triangleStyleOne}>
            {this.state.timelineView &&
              <View style={[styles.triangle]} />
            }
            {this.state.CalendarView &&
              <View style={[styles.triangle2]} />
            }
          </View>
        </View>


        <ScrollView>
          <View style={[styles.profileinfo]}>
            {this.state.timelineView ?
              <Timeline
                style={styles.list}
                data={this.state.locationData}
                circleColor='rgba(0,0,0,0)'
                circleSize={20}
                innerCircle={'icon'}
                lineColor='rgb(127,127,127)'
                timeContainerStyle={{ minWidth: 100 }}
                timeStyle={{ textAlign: 'center', backgroundColor: 'rgb(127,127,127)', color: 'white', padding: 2, borderRadius: 13, fontSize: 12 }}
                titleStyle={{ marginTop: -8, fontSize: 14 }}
                descriptionStyle={{ color: 'gray', fontSize: 12 }}
                options={{
                  removeClippedSubviews: false,
                  // style:{paddingTop:10}
                }}
              />
              :

              <CalendarStrip
                calendarAnimation={{ type: 'sequence', duration: 30 }}
                daySelectionAnimation={{
                  type: 'border',
                  duration: 200,
                  borderWidth: 1,
                  borderHighlightColor: 'black',
                }}
                style={{ paddingTop: 0, paddingBottom: 0 }}
                calendarHeaderStyle={{ color: '#7f7f7f' }}
                calendarColor={'#e7e7e7'}
                dateNumberStyle={{ color: '#7f7f7f' }}
                dateNameStyle={{ color: '#7f7f7f' }}
                highlightDateNumberStyle={{ color: 'black' }}
                highlightDateNameStyle={{ color: 'black' }}
                disabledDateNameStyle={{ color: 'grey' }}
                disabledDateNumberStyle={{ color: 'grey' }}
                // datesWhitelist={datesWhitelist}
                // datesBlacklist={datesBlacklist}
                iconContainer={{ flex: 0.1 }}
              />
            }

            {this.state.CalendarView &&
              <Timeline
                style={styles.list}
                data={this.Calendardata}
                circleColor='rgba(0,0,0,0)'
                circleSize={20}
                innerCircle={'icon'}
                lineColor='rgb(127,127,127)'
                timeContainerStyle={{ minWidth: 100 }}
                timeStyle={{ textAlign: 'center', backgroundColor: 'rgb(127,127,127)', color: 'white', padding: 2, borderRadius: 13, fontSize: 13 }}
                titleStyle={{ marginTop: -8, fontSize: 14 }}
                descriptionStyle={{ color: 'gray', fontSize: 12 }}
                options={{
                  removeClippedSubviews: false,
                  style: { paddingTop: 10 }
                }}
              />
            }
          </View>
        </ScrollView>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginBottom: 10,
    height: '100%',
    position: 'relative'
  },
  text: {
    color: 'black',
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 10,
  },

  containerinner: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  item: {
    //flex: 0.5, 
    width: '50%',

    padding: 5,
    flexDirection: 'row',
    // backgroundColor: 'red',
    // flexGrow: 1,
    // flexShrink: 0,
  },
  item1: {
    //flex: 0.5, 
    width: '100%', //using fixed item width instead of flex: 0.5 works
    //  flexWrap: 'wrap',
    padding: 10,
    flexDirection: 'row',
    marginTop: 50,

  },
  imageprofile:
  {
    // height: 100, width: 100, 
    // padding:15, 
    // borderRadius: 100/2,
    //  marginLeft: "auto",
    //   marginRight: "auto",
    // marginTop:50,

    width: 120,
    height: 120,
    borderRadius: 120 / 2,
    // borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
    alignSelf: 'center',
    //position: 'absolute',
    zIndex: 1
    //marginTop:130
  },
  profileinfo:
  {
    backgroundColor: '#e7e7e7',
    flex: 1,
    height: height,
    padding: 10,
  },
  clockimg:
  {
    // width:18,
    // height:18
  },

  container1: {
    flex: 1,
    flexDirection: 'row', justifyContent: 'center',
  },
  viewStyleOne: {
    width: 70,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    // padding:10,
    marginTop: 10,
  },

  triangleStyleOne: {
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 11,
    color: 'blue',
    paddingLeft: 6
  },
  busnotification: {
    textAlign: 'center',
    fontSize: 12,
    color: 'black',
  },
  list: {
    flex: 1,
    marginTop: 20,
    paddingBottom: 20,
    height: 200,

  },
  fixed: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },

  triangleWidth: {
    flex: 1,
    flexDirection: 'row', justifyContent: 'center',
  },

  triangle: {
    width: 20,
    height: 5,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 25,
    borderRightWidth: 25,
    borderBottomWidth: 20,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#e7e7e7',
    marginRight: 70,

  },

  triangle2: {
    width: 20,
    height: 5,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 25,
    borderRightWidth: 25,
    borderBottomWidth: 20,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#e7e7e7',
    marginLeft: 70,
  },

});