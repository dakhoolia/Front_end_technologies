// THE WINDOW OBJECT
/*
- is the main object of BOM (browser window)
- all global javascript objects, function and variables
are members of window object by default
- two properties, determining size (innerHeight and innerWidth) in px
- don't include toolbars and scrollbars existing on website (read Only)
- changing^ does not affect our browser size
- to change size window.resizeTo() method
*/

// creating new window with window.open() method and resizing it

let myWindow;
function openWin() {
    //window.open("URL", "name", "specs", "replace")
    myWindow = window.open("", "", "Width=200, height=100");
}

function resizeWin() {
    myWindow.resizeTo(300, 300);
}


// we can also create a new window with moveTo(). sets the windows top lef coordinates
// analogous methods moveBy(), resizeBy() modify current ones instead of setting new coordinates

// example 
function moveWinTo() {
    myWindow.moveTo(1, 999);
}

function moveWinBy() {
    myWindow.moveBy(75,75);
}

let myWindow2;
function openWin1() {
    myWindow2.open("","", "width=300, height=300");
    setTimeout (() => {
        resizeWin1()
    }, (5000));
}

function resizeWin1() {
    myWindow2.resizeTo(400, 400);
    setTimeout (() => {
        moveWinTo1()
    }, 5000);
}

function moveWinTo1() {
    myWindow2.moveTo(1,999);
    setTimeout(() => {
        myWindow2.close();
    }, 5000);
}

// screen

/* the window.screen contains information about the user's screen such as:
- width: current size of the screen
- height: current size of screen
- availWidth: the amount of space in pixles available to the window
- availHeight: the amount of space in pixles available to the window 
- colorDepth: color depth of screen
- pixelDepth: pixel depth of screen

*read only and won't affect code*

difference between window and screen is window is the window open and screen is the physical screen
*/

console.log(screen.width);
console.log(window.innerWidth);

document.getElementById("p1").innerHTML =
    "page location is " + window.location.href;

document.getElementById("p2").innerHTML =
    "the window hostname is " + window.location.hostname;

document.getElementById("p3").innerHTML =
    "the window pathname is " + window.location.pathname;

document.getElementById("p4").innerHTML =
    "the windowm protocol is " + window.location.protocol;

document.getElementById("p5").innerHTML =
    "the window port is " + window.location.port;

function newDoc() {
    window.location.assign("https://coinmarketcap.com/");
}


// task 

function google() {
    window.location.assign("https://google.com");
}

function back() {
    window.history.back();
}


function goBack() {
    if (window.history.length >= 5) {
        window.history.go(-5);
    } else {
        window.history.go(-(window.history.length - 1))
    }
}

