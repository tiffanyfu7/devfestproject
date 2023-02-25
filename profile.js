//import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
const firebaseConfig = {
  apiKey: "AIzaSyA7G8lJl_6mHTfIDcNXwRsLurGAeY23YsU",
  authDomain: "devfest-db40c.firebaseapp.com",
  databaseURL: "https://devfest-db40c-default-rtdb.firebaseio.com",
  projectId: "devfest-db40c",
  storageBucket: "devfest-db40c.appspot.com",
  messagingSenderId: "974911936807",
  appId: "1:974911936807:web:7ea2b7b8f510f2691cf102",
  measurementId: "G-HX1LXBLZR5"
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

//get current user's username
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const current_username = urlParams.get('name')
console.log(current_username);
document.getElementById("current_user").innerHTML=current_username;

var userDataRef = firebase.database().ref("TestUsers");

//add add
userDataRef.once("value") //change?
  .then(function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      var name_val = childSnapshot.key;
      $("#group_names").append("<p>" + name_val + "</p>");
  });
});
