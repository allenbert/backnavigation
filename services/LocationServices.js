// ItemService.js

import { db } from '../config/db';


addItem = (item) => {
    var position = item.location;
    db.ref('/userlocation/' + item.userId).push({
        "accuracy": position.accuracy,
        "altitude": position.altitude,
        "id": position.id,
        "isFromMockProvider": position.isFromMockProvider,
        "latitude": position.latitude,
        "locationProvider": position.locationProvider,
        "longitude": position.longitude,
        "mockLocationsEnabled": position.mockLocationsEnabled,
        "provider": position.provider,
        "time": position.time,
        "formatted_address": item.formatted_address
    }, err => console.log(err)).then(res => {
        console.log(res)
    })
}

// getLocations = (userId) => {
//     debugger;
//     var timestampRange = getTimeStamp();
//     var userRef = db.ref("userlocation/" + userId);
//     userRef.orderByChild("time").startAt(timestampRange.start).endAt(timestampRange.end).on("child_added", function (data, prevChildKey) {
//         return data.val()
//     });
// }

getTimeStamp = () => {
    var start = new Date();
    start.setHours(0, 0, 0, 0);
    var end = new Date(start);
    end.setHours(23, 59, 59, 999);

    return {
        "start": start.getTime(),
        "end": end.getTime()
    }
}

convertTsToDt = (ts) => {
    var d = new Date(ts).toLocaleTimeString();
    return d;
}

export default {
    addItem,
    //getLocations,
    getTimeStamp,
    convertTsToDt
}