var firebaseConfig = {
  apiKey: "AIzaSyBowYKyHf439Vm4vIOaBY19DKU2DzUH2Rk",
  authDomain: "iwssecondphase.firebaseapp.com",
  databaseURL: "https://iwssecondphase-default-rtdb.firebaseio.com",
  projectId: "iwssecondphase",
  storageBucket: "iwssecondphase.appspot.com",
  messagingSenderId: "1001865539137",
  appId: "1:1001865539137:web:af8788c728548ec596e0c0",
};

firebase.initializeApp(firebaseConfig);

var database = firebase.database();

function onSubmit() {
  database.ref("data").set({
    fname: document.getElementById("fname").value,
    lname: document.getElementById("lname").value,
    email: document.getElementById("email").value,
    gender: document.getElementById("gender").value,
    cl: document.getElementById("cl").value,
    dob: document.getElementById("dob").value,
    live: document.getElementById("live").value,
    thingslove: document.getElementById("thingslove").value,
  });
  reset();
  database.ref("data").once("value", function (snapshot) {
    var data = snapshot.val();
    alert(
      "Thank you " +
        data.fname +
        " For Submitting Form and details saved in database"
    );
    console.log(data.name);
    console.log(data.age);
  });
}

function reset() {
  document.getElementById("fname").value = "";
  document.getElementById("lname").value = "";
  document.getElementById("email").value = "";
  document.getElementById("gender").value = "";
  document.getElementById("cl").value = "";
  document.getElementById("dob").value = "";
  document.getElementById("live").value = "";
  document.getElementById("thingslove").value = "";
}
