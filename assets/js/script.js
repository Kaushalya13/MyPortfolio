// assignment page

var slider = document.getElementById("slider");
var upArrow = document.getElementById("upArrow");
var downArrow = document.getElementById("downArrow");

let x = 0;
downArrow.onclick = function (){
    if (x > "-3000"){
        x = x - 300;
        slider.style.top = x + "px";
    }

}

upArrow.onclick = function (){
    if (x < 0){
        x = x + 300;
        slider.style.top = x + "px";
    }

}

// var navigation = document.getElementById("navigation");
//
// function openmenu() {
//     navigation.style.right ="0";
// }
//
// function closemenu() {
//     navigation.style.left = "-200px";
// }