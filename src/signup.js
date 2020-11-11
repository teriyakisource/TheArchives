

function signUp(){
    firebase.auth().createUserWithEmailAndPassword(document.getElementById("email").value, document.getElementById("password").value).catch(function(error) {
        alert(error.message)
    });
}