var firebaseConfig = 
    {
    apiKey: "AIzaSyC9lf1CVdo1cxNUA9AYkgrQnQv4Xvlo4g8",
    authDomain: "kwitterwebapp-4882d.firebaseapp.com",
    projectId: "kwitterwebapp-4882d",
    storageBucket: "kwitterwebapp-4882d.appspot.com",
    messagingSenderId: "778077558992",
    appId: "1:778077558992:web:3660ced31ec1436c4f66d5"
    };

firebase.initializeApp(firebaseConfig);

function addUser()
    {
    user_name = document.getElementById("user_name").value;

    firebase.database().ref("/").child(user_name).update({purpose : "adding user"})
    }