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
var userFormDB = firebase.database().ref("userForm");

document.getElementById("userForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var email = getElementVal("email");
  var password = getElementVal("psw");

  saveTripInfo(name, email, password);
}

const saveTripInfo = (name, email, password) => {
  var newUserForm = userFormDB.push();

  newUserForm.set({
    name : name,
    email : email,
    password : password,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
