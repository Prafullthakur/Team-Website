//document.addEventListener('contextmenu', event => event.preventDefault());
var night = document.getElementsByClassName('.night');

function myfunction() {
    night.className = "night-mode";
    console.log('working');
}
night.onclick = myfunction();