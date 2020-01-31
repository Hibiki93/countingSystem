// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyC0VuR-Bt32-o9yaZWlR7AXWhd7twOqKBs",
    authDomain: "countingdatabase.firebaseapp.com",
    databaseURL: "https://countingdatabase.firebaseio.com",
    projectId: "countingdatabase",
    storageBucket: "countingdatabase.appspot.com",
    messagingSenderId: "155011884318",
    appId: "1:155011884318:web:519e48a2c6dd4187b2550f"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var db;
db = firebase.firestore(app);