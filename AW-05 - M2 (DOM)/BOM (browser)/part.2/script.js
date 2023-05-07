

// ALERTS

/*
- alerts are an excellent way of showing info from coockies
- be cautios with alert use: they prevent user from accessing content (until closed)
*/

function myFunction() {
    alert (window.location.hostname);
}

//confirm("are you there");

let tired = window.prompt("what's your sign?");
if (tired.toLowerCase() === "scorpio") {
    alert ("woow me too");
} else {
    alert("we might be compatible");
}


function myFunction1() {
    //alert (window.location.hostname);
    Swal.fire({
      title:  'Error!', 
      text: 'how are you',
      icon: "error",
      confirmButtonText: "cool",
})
}



//CONFIRM BOX

// confirm return booleans 
function myFunction2() {
    let txt;
    // if true
    if (confirm("press a button")) {
        txt = "you pressed ok!!!";
    // if false
    } else {
        txt = "you pressed cancel!";
    }
    document.getElementById("demo").innerHTML = txt;
}

// Prompt box

function myFunction3() {
    let txt1;
    let = person = prompt("please enter your name:", "Elias");
    if (person == null || person == "") {
        txt1 = "user cancelled the prompt"
    } else {
        txt1 = "hello " + person + " nice to meet you :)";
    }
    document.getElementById("demo1").innerHTML = txt1;
}


// TIMERS 
// creating a clock that refreshes every secound 

function startTime() {
const today = new Date();
let h = today.getHours();
let m = today.getMinutes();
let s = today.getSeconds();
m = checkTime(m);
s = checkTime(s);
document.getElementById("txt2").innerHTML = h + ":" + m + ":" + s;
setTimeout(startTime, 1000); 
}

function checkTime (i) {
if (i < 10) {i = "0" + i};
return i;
}

// INTRODUCTION TO COOKIES
/* 
- we need to set the document cookie propertie
- all cookies are stored in one text variable
- all cookies have their name set
- our cookie has "username" (we could have cookies with other names)
*/
document.cookie = "username= john doe; expires=Thu, 12 Feb 2023 12:00:00 UTC; path=/";

// to delete cookie set expiration date to a date that has passed

// when creating new cookie, old cookie is not overwritten but added to the last

// we need proper js function to get and set cookies that search for the cookie in the cookie string

// activity 

document.cookie = "username= Danial";


// GETTING COOKIES

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <caches.length; i++) {
    let c = ca[i];
    while (c.chartAt(0) == " ") {
        c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
    }
}
return "";
}


// SETTING COOKIES


function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

