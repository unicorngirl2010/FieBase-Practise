var firebaseConfig = {
    apiKey: "AIzaSyDzV0JKfwde-kmhXUN01CtPutj-huJuZz4",
    authDomain: "practise-e3bfc.firebaseapp.com",
    databaseURL: "https://practise-e3bfc-default-rtdb.firebaseio.com",
    projectId: "practise-e3bfc",
    storageBucket: "practise-e3bfc.appspot.com",
    messagingSenderId: "1063142878543",
    appId: "1:1063142878543:web:5cff560572fb4d52aee93a"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS
function addUser() {
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose: "adding user"
    });
}
