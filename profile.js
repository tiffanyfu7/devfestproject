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

var userDataRef = firebase.database().ref("Users").orderByKey();
userDataRef.once("value", (snapshot) => {
      var key = childSnapshot.key;
      var childData = childSnapshot.val();              // childData will be the actual contents of the child

      var name_val = childSnapshot.val().name;
      console.log(name_val);

      document.getElementById("user_name").innerHTML = snapshot.val().key.value;
  });
 userDataref.on('child_added', (snapshot) => {
  console.log(snapshot.key);
 });

