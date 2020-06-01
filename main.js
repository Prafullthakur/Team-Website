//document.addEventListener('contextmenu', event => event.preventDefault());
var night = document.querySelector('.night');
var container = document.querySelector('.container');
var count = 0;

function myfunction() {
    count++;
    if (count % 2 != 0) {
        night.className = "night-mode";
        container.style.background = 'rgba(0, 0, 0, 0.1)';
    } else {
        night.className = "night";
        container.style.background = 'white';
    }
}