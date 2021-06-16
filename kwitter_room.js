var firebaseConfig = 
    {
    apiKey: "AIzaSyC9lf1CVdo1cxNUA9AYkgrQnQv4Xvlo4g8",
    authDomain: "kwitterwebapp-4882d.firebaseapp.com",
    databaseURL: "https://kwitterwebapp-4882d-default-rtdb.firebaseio.com",
    projectId: "kwitterwebapp-4882d",
    storageBucket: "kwitterwebapp-4882d.appspot.com",
    messagingSenderId: "778077558992",
    appId: "1:778077558992:web:3660ced31ec1436c4f66d5"
    };

firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addUser()
    {
    user_name = document.getElementById("user_name").value;

    firebase.database().ref("/").child(user_name).update({purpose : "adding user"})
    }

function addRoom()
    {
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({purpose: "adding room_name"});

    localStorage.setItem("room_name", room_name);

    window.location = "kwitter_page.html";
    }

function getData()
    {
    firebase.database().ref("/").on('value', function(snapshot)
        {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot) 
            {
            childKey;
            childSnapshot.key;
            Room_names = childKey;
            //Start Code
            console.log("Room Name - " + Room_names);
            row = "<div class = 'room_name' id = " + Room_names + "onclick = 'redirectToRoomName(this.id')'>#" + Room_names + "</div><hr>";
            document.getElementById("output").innerHtml += row;
            //End Code
            });
        });
    }
 
getData();

function redirectToRoomName(name)
    {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
    }