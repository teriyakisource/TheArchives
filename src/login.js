function login()
{
    const email = document.getElementById("email").value;
    
    const password = document.getElementById("password").value;
    console.log(email, password)
    
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error){  
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(error.message)
    }); 
}