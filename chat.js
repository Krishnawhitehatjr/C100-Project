// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
firebaseConfig = {
    apiKey: "AIzaSyC89ccA5RSJUhERzCpm7HO79h_XPQ1VkQY",
    authDomain: "lets-chat-web-app-7b2fb.firebaseapp.com",
    projectId: "lets-chat-web-app-7b2fb",
    storageBucket: "lets-chat-web-app-7b2fb.appspot.com",
    messagingSenderId: "273257725914",
    appId: "1:273257725914:web:e7a938f4221b3e6f7c8ae3"
  };
   firebase.initializeApp(firebaseConfig);

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
}



