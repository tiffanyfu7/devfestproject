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
  
  document.getElementById("expenseForm").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var expense = getElementVal("expense");
    var payer = getElementVal("payer");
    var date = getElementVal("date");
    var amount = getElementVal("amount");
    var type = getElementVal("type");
    var splitMethod = document.querySelector('#split');
  
    saveExpenseInfo(expense, payer, date, amount, type, splitMethod);
    document.getElementById("userForm").reset();
  
    window.location.replace("profile.html");
  }
  
  const saveExpenseInfo = (expense, payer, date, amount, type, splitMethod) => {
    var newUserForm = expenseFormDB.push().set({
      
    });
  
    newUserForm.set({
      key: username,
      name : name,
      password : password,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };
  