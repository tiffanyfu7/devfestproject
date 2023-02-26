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

// reference your database
var userFormDB = firebase.database().ref("Users");
var tripDB = firebase.database().ref("Trips");

document.getElementById("userForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var username = getElementVal("username");
  var name = getElementVal("name");
  var password = getElementVal("psw");
  var verif = getElementVal("psw-repeat");

  if (password == verif) {
    saveTripInfo(username, name, password);
    document.getElementById("userForm").reset();
  }
  
}

const saveTripInfo = (username, name, password) => {

  var newUser = {
    key: username,
    name : name,
    password : password,
    trips: {trip1: {key: "trip1"}}
  };

  userFormDB.child(username).set(newUser);

  tripDB.child('/trip1/participants/' + username).set({name: name});

};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};

function redirectHandler() {
  let formName = document.getElementById("username").value;
  let name = document.getElementById("name").value;
  let psw = document.getElementById("psw").value;
  let pswRepeat = document.getElementById("psw-repeat").value;

  if(formName != '' && name != '' && psw != '' && pswRepeat !='') {
    if (psw != pswRepeat) {
      alert("Passwords do not match, try again.");
    } else{
      let formNameQP = "name="+formName;
      console.log("profile.html?"+formNameQP);
      window.location.replace("profile.html?"+formNameQP);
    }
  }
  
  
}
