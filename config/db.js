var firebase = require('firebase/app');
require('firebase/auth');
require('firebase/database');

let config = {
    apiKey: "AIzaSyDfys8ZjqoaUO0w47jp3UegEbh8CO_9wWY",
    authDomain: "leadtracklocations.firebaseapp.com",
    databaseURL: "https://leadtracklocations.firebaseio.com",
    projectId: "leadtracklocations",
    storageBucket: "",
    messagingSenderId: "127672977504"
};
let app = firebase.initializeApp(config);
const db = app.database();
export { db, config }