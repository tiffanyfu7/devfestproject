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

//initiate jquery
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const current_username = urlParams.get('name');

// reference your database
var expenseFormDB = firebase.database().ref("Expenses");
var userDB = firebase.database().ref("Users");

document.getElementById("expenseForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var expense = getElementVal("expense");
  var payer = getElementVal("payer");
  var date = getElementVal("date");
  var amount = getElementVal("amount");
  var type = getElementVal("type");
  var splitMethod = document.querySelector('#split').value;

  saveExpenseInfo(expense, payer, date, amount, type, splitMethod);
//   document.getElementById("expenseForm").reset();

  let formNameQP = "name="+current_username;
  window.location.replace("profile.html?"+formNameQP);
}

const saveExpenseInfo = (expense, payer, date, amount, type, splitMethod) => {

  var payment = 0;
  var owe = {};
  userDB.once("value") //change?
    .then(function (snapshot) {
      var numParticipants = snapshot.numChildren();
      var payment = parseInt(amount) / numParticipants;

      snapshot.forEach(function (childSnapshot) {
        var user = childSnapshot.value;
        var username = childSnapshot.key;
        var name = user["name"];
        if (username != payer) {
          owe.add({[username]: {name: name, amount: payment}});
        } else {
          owe.add({[username]: {name: name, amount: 0}});
        }
      });
    });

  var newExpenseForm = expenseFormDB.push().set({
    name: expense,
    participants: owe,
    payer: {spent: payment, [payer]: {key: payer}},
    trip: "trip1",
    type: type,
    date: date,
    total: amount,
    splitMethod: splitMethod
  });

};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};

console.log(current_username);

function redirectHandler(){
  let formNameQP = "name="+current_username;
  window.location.replace("profile.html?"+formNameQP);
}
