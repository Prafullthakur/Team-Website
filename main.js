document.addEventListener('contextmenu', event => event.preventDefault());
var night = document.querySelector('.night');
var container = document.querySelector('.container');
var a1 = document.querySelector('.achange');
var a2 = document.querySelector('.a2');
var a3 = document.querySelector('.a3');
var count = 0;

function myfunction() {
    count++;
    if (count % 2 != 0) {
        night.className = "night-mode";
        container.style.background = 'rgba(0,0,0,0.18)'

    } else {
        night.className = "night";
        container.style.background = 'white';

    }
}

function change1() {
    a1.className = "achange";
    a2.className = "a2";
    a3.className = "a3";
}

function change2() {
    a1.className = "a1";
    a2.className = "achange";
    a3.className = "a3";
}

function change3() {
    a1.className = "a1";
    a2.className = "a2";
    a3.className = "achange";
}