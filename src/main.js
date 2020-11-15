
function signOut(){
    console.log("signing out")
    firebase.auth().signOut().then(function() {
        
        window.location.href = "../index.html"
    }).catch(function(error) {
        alert(error.message)
    }); 
}



function getContent(loc)
{
    firebase.database().ref("TheArchives/"+loc).once('value', function(snapshot)
    {
        var items = 0;
        snapshot.forEach(function(childSnapshot)
        {
            items++;
            
        })

        for (i=1;i<items+1;i++)
        {
            
            firebase.database().ref("TheArchives/" + loc + "/" + i.toString()).once('value', function(snapshot)
            {
                var p = []
                
                snapshot.forEach(function(childSnapshot)
                {
                    
                    
                    p.push(childSnapshot.val())
                   

                })
                console.log(p)

                document.getElementById("content").innerHTML += "<a href='content.html#" + p[2] +"'><div class='thumb'> <div class='thumbcontent'>   <h3>" + p[1] + "<img src='" + p[0] + "'</div></div></a>"
                
                
                
            })
        }

    })
}





// getContent("videos")





var w = 500;
var h = 500;
$('#thumbcontent').find('img').each(function(n, image){
    var image = $(image);
    image.attr({src : image.attr('src').replace(/s\B\d{2,4}/,'s' + w + '-h' + h +'-c')});
    image.attr('width',w);
    image.attr('height',h);
});





