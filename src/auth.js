var firebaseConfig = {
    apiKey: "AIzaSyAAYUyxltg9BftiNg3oOfgV8KRiFm0b7U4",
    authDomain: "the-archives-8116f.firebaseapp.com",
    databaseURL: "https://the-archives-8116f.firebaseio.com",
    projectId: "the-archives-8116f",
    storageBucket: "the-archives-8116f.appspot.com",
    messagingSenderId: "720679956745",
    appId: "1:720679956745:web:4621ba35e2c7a14cad23d8",
    measurementId: "G-7CCQBDM1HN"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();






firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        var username = user.email;
        console.log("logged in")
        if (window.location.href.includes("index.html") || window.location.href.includes("signup.html"))
        {
            console.log("asda")
            window.location.href = "home.html"
        }
        else
        {
            console.log("meail deal")
        }

    }    
});