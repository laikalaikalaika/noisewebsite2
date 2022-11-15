const videoHtml = document.querySelector("#video");
console.log("HERE!");
openPlayer = function (info) {
    console.log(`you just pressed the button at I have been given a ${info}.`);
    document.getElementById('noisevideo').scrollIntoView(); 
    document.getElementById('noisevideo').play(); 
}
