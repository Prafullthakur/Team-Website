//document.addEventListener('contextmenu', event => event.preventDefault());
var night = document.querySelector('.night');

function myfunction() {
    night.className = "night-mode";

}
night.onclick = myfunction();