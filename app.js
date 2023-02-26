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
var tripFormDB = firebase.database().ref("tripForm");

document.getElementById("tripForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var tripName = getElementVal("tripName");
  var tripDate = getElementVal("tripDate");

  saveTripInfo(tripName, tripDate);

  //open to new page with trip info
}

const saveTripInfo = (tripName, tripDate) => {
  var newTripForm = tripFormDB.push();

  newTripForm.set({
    name: tripName,
    date: tripDate,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
