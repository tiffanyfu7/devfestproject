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

const loginForm = document.getElementById("loginForm");

var passwordMatch = false;

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var userDB = firebase.database().ref("Users");


document.getElementById("loginForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();
  var username = getElementVal("username");
  var password = getElementVal("psw");
  console.log(username);
  console.log(password);

  userDB.once("value")
    .then(function (snapshot) {
      var user = snapshot.child(username).val();
      if (user != null) {
        var psw = user["password"];
        console.log("psw = password is: " + (psw === password));
        if (psw != password) {
          alert("Incorrect username or password, try again");
        }
        else {
          window.location.replace("profile.html?" + "name=" + username);
        }
      } else {
        alert("Incorrect username or password, try again");
      }
      document.getElementById("loginForm").reset();
    })


};
const getElementVal = (id) => {
  return document.getElementById(id).value;
};
