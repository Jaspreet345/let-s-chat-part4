//YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyCXKXThrjDn-HpuAlR9V7pYzrx3_mNrmoA",
    authDomain: "kwitter-10487.firebaseapp.com",
    databaseURL: "https://kwitter-10487-default-rtdb.firebaseio.com",
    projectId: "kwitter-10487",
    storageBucket: "kwitter-10487.appspot.com",
    messagingSenderId: "498651719501",
    appId: "1:498651719501:web:3942478974243594147904",
    measurementId: "G-XV0LQ55NMY"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name=localStorage.getItem("user_name");
  room_name=localStorage.getItem("room_name");
  function send() {
        msg=document.getElementById("msg").value;
        firebase.database().ref(room_name).push({
              name:user_name,
              message:msg,
              like:0
        });
        document.getElementById("msg").value="";
  }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();
