
setInterval (() => {
    if (Math.random () > 0.5) { 
    document.getElementById("p_size").style.fontSize = "8px";
    } else {
        document.getElementById("p_size").style.fontSize ="32px";
    }
}, 5000)

// displays todays date and refreshes every 10 sec
setInterval(() => document.getElementById("date").innerHTML = "Todays date is :" + Date (), 10000); 


// set an interval that gives each color a 33% chance to be the background color
setInterval (() => {
    if (Math.random() < 0.33) {
        document.getElementById("para3").style.backgroundColor ="Yellow";
        
    } else if (Math.random () > 0.33 && Math.random () < 0.66) {
        document.getElementById("para3").style.backgroundColor = "magenta";
        
    } else { (Math.random() > 0.66) 
    document.getElementById("para3").style.backgroundColor = "cyan"}
    }, 3000)

    // display the number of images on the page in the p with "demo" id
    document.getElementById("demo").innerHTML = "there are: " + document.images.length + "images on this page";

    // display height width and source link in alert of the first image
    // after button is clicked
var firstchild = document.body.firstElementChild;
    function showDetails() {
        alert ("Image height: " + document.body.firstElementChild.height +
        " image width: " + document.body.firstElementChild.width +
        " image source: " + document.body.firstElementChild.src);
    }