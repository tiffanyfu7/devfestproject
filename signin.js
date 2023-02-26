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
var userDB = firebase.database().ref("Users");

document.getElementById("loginForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var username = getElementVal("username");
  var password = getElementVal("psw");

  console.log("Inputted info is:" + username + " " + password);
  // if (password == verif) {
  //   saveTripInfo(username, name, password);
  //   document.getElementById("userForm").reset();
  // }
  userDB.once("value") //change?
    .then(function (snapshot) {
      var userPsw = snapshot.child(username + "/password").val();
      if (userPsw != null) {
        var psw = userPsw;
        console.log("type of psw is:" + typeof (psw));
        console.log("type of password is:" + typeof (password));
        console.log("correct passowrd is: " + (psw != password));
      }
    })
  
}

const getElementVal = (id) => {
  return document.getElementById(id).value;
};

function redirectHandler() {
  let formName = document.getElementById("username").value;
  let paword = document.getElementById("psw").value;

  if (formName != '' && paword != '') {
    if (password != psw) {
      alert("Incorrect username or passcode, try again");
    } else {
      let formNameQP = "name=" + formName;
      console.log("profile.html?" + formNameQP);
      window.location.replace("profile.html?" + formNameQP);
    }
  }

}