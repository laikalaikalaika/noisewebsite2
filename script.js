const videoHtml = document.querySelector("#video");
console.log("HERE!");
openPlayer = function (info) {
    console.log(`you just pressed the button at I have been given a ${info}.`);
    document.getElementById('noisevideo').scrollIntoView(); 
    document.getElementById('noisevideo').play(); 
}
function displayDate() {
    console.log('New Date', new Date());
    var today = new Date();
    document.getElementById("showDate").innerHTML = today;
    console.log(today.toLocaleString());

    const fragment = document.createDocumentFragment();
    const p = fragment.appendChild(document.createElement('p'));
    p.textContent = today.toLocaleString();

document.body.appendChild(p);

    
  }
  displayDate()

  // I STILL cannot make this work TT