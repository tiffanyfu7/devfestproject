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
    document.getElementById("expenseForm").reset();
  
    window.location.replace("profile.html");
  }
  
  const saveExpenseInfo = (expense, payer, date, amount, type, splitMethod) => {
    var newExpenseForm = expenseFormDB.push().set({
      name: expense,
      type: type,
      date: date,
      total: amount,
      splitMethod: splitMethod
    });

    // get num children in Users (number of users to split bill between)
    // get names of users 
    // for loop to update the Expenses set: (loop through each user and add them into expense set)
  
    userDB.once("value") //change?
      .then(function(snapshot) {
        var numParticipants = snapshot.numChildren();
        var payment = parseInt(amount) / numParticipants;

      snapshot.forEach(function(childSnapshot) {
        var username = childSnapshot.key;
        var name = childSnapshot.key.value[]
  });
});

    var participants = new Set();
    if (splitMethod.equals("evensplit")){

    }

  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };
  