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
var expenseFormDB = firebase.database().ref("Users");

document.getElementById("userForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var username = getElementVal("username");
  var name = getElementVal("name");
  var password = getElementVal("psw");

  saveTripInfo(username, name, password);
  document.getElementById("userForm").reset();

  window.location.replace("profile.html");
}

const saveTripInfo = (username, name, password) => {
  var newUserForm = expenseFormDB.child(username);

  newUserForm.set({
    key: username,
    name : name,
    password : password,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
