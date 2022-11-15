const videoHtml = document.querySelector("#video");
console.log("HERE!");
openPlayer = function (info) {
    console.log(`you just pressed the button at I have been given a ${info}.`);
    document.getElementById('noisevideo').scrollIntoView(); 
    document.getElementById('noisevideo').play(); 
}
function displayDate() {
    console.log('New Date', new Date());
    var today = new Date()
    document.getElementById("showDate").innerHTML = (today.toLocaleString());
    console.log(today.toLocaleString());

    
  }
  displayDate()

  // I STILL cannot make this work TT