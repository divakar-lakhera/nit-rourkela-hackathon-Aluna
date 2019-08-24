firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.

    document.getElementById("user_div").style.display = "block";
    document.getElementById("login_div").style.display = "none";

    var user = firebase.auth().currentUser;

    if(user != null){

      
       var log=user.uid;
       $.ajax({
        url: 'db-php/setSession.php',
        method:"POST",
        data:{'uid' : log},
        success:function(data){
            console.log(data);
        }
    });
     //location.href="aluna-main.html";
     
    }

  } else {
    // No user is signed in.]
    alert("Logout Successful");
    location.href("index.html");
  }
});

function login(){

  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);

    // ...
  });

}
function logout(){
  firebase.auth().signOut();
  location.href("index.html");
}

