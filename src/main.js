
function signOut(){
    console.log("signing out")
    firebase.auth().signOut().then(function() {
        
        window.location.href = "index.html"
    }).catch(function(error) {
        alert(error.message)
    }); 
}


function getContent()
{
    firebase.database().ref("TheArchives").once('value', function(snapshot)
    {
        snapshot.forEach(function(childSnapshot)
        {
            alert(snapshot.val());
        })
    })
}

getContent()