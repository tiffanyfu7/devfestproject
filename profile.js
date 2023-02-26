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
document.getElementById("current_user").innerHTML = current_username;

var currentUserDB = firebase.database().ref("Users/" + current_username);
var userDataRef = firebase.database().ref("Trips/trip1/participants");

getTotalSpent();

//add add
userDataRef.once("value") //change?
  .then(function (snapshot) {
    snapshot.forEach(function (childSnapshot) {
      var participant = childSnapshot.val();
      var name_val = participant["name"];
      if (childSnapshot.key != current_username) {
        $("#group_names").append("<p>" + name_val + "</p>");
      }

    });
  });

currentUserDB.once("value")
  .then(function (snapshot) {
    document.getElementById("current_name").innerHTML = snapshot.val()["name"];
  })

function redirectHandler() {
  let formNameQP = "name=" + current_username;
  window.location.replace("addexpense.html?" + formNameQP);
}

function getTotalSpent(){
  var expenseDB = firebase.database().ref("Expenses");

  var expense_total = 0;
  expenseDB.once("value").then(function(snapshot){
    console.log(snapshot.key);
    snapshot.forEach(function(childSnapshot){
      var expense = childSnapshot.val();

      expense_total += parseInt(expense["total"]);
    })   
    document.getElementById("total_amount").innerHTML=expense_total;
  })

}
