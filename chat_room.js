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
    document.getElementById("user_name").innerHTML="Welcome"+user_name+"!";
    function addRoom() {
          room_name=document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                purpose:"adding room name"
          });
          localStorage.setItem("room_name",room_name);
          window.location="chat_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room name="+Room_names);
      row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="chat_page.html";
}
