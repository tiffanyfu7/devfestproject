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

  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var userDB = firebase.database().ref("Users");


  document.getElementById("loginForm").addEventListener("submit", submitForm);

  function submitForm(e) {
    e.preventDefault();
    var username = getElementVal("username");
    var password = getElementVal("psw");

    // if (password == verif) {
    //   saveTripInfo(username, name, password);
    //   document.getElementById("userForm").reset();
    // }
    alert("hello"); 
    userDB.once("value") //change?
      .then(function(snapshot) {
        var user = snapshot.child(username).val();
        var psw = user["password"];
        if ("abc" == psw) {
            alert("successful sign in");
        } else {
          alert("failed login");
        }

        document.getElementById("loginForm").reset();
    // if (username === "user" && password === "web_dev") {
    //     alert("You have successfully logged in.");
    //     location.reload();
    // } else {s
    //     loginErrorMsg.style.opacity = 1;
    // }
})
    
  }
  
function redirectHandler() {
  let formName = document.getElementById("username").value;
  let password = document.getElementById("psw").value;
  if(formName != '' && password != '') {
    let formNameQP = "name="+formName;
    console.log("profile.html?"+formNameQP);
    window.location.replace("profile.html?"+formNameQP);
  }
}