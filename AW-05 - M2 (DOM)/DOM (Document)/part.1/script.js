// DOM provides us with multiple methods and properties

/* With the object model,
JavaScript gets all the power it needs to create dynamic HTML*/

// this is a DOM Method, basically an action performed on objects (elements) of DOM
document.getElementById("para1").innerHTML = "This is the first JS edited Paragraph";

/* DOM methods include selecting an element, creating a new element,
changing the content of the element, changing CSS, removing elements etc */

// ^this is mainly done by JS 

const log = console.log;

// DOM methods for selecting and modifying elements
const node1 = document.getElementById("div1");
const node2 = document.getElementById("div2");

// innerhtml get ALL elements and not only text meaning <p> and & will appear
function textnode1() {
    alert (node1.innerHTML);
}

// innertext only isolates to the actual text
function textnode2() {
    alert (node2.innerText);
}

// create a html element using DOM methods 
var div = document.createElement("div");
document.body.appendChild(div);

var h1 = document.createElement("h1");

// creating text without tag 
var txt = document.createTextNode("this is text in JS");

// adding text to h1 tag
h1.appendChild(txt);

// adding h1 to the div created earlier
document.body.lastChild.appendChild(h1);

// document.body.firstElementChild.remove(); removes h1 at the top


var para = document.createElement("p");
document.body.appendChild(para);
    
    let txt2 = document.createTextNode ("this is my first paragraph");
    para.appendChild(txt2);
    para.setAttribute("id", "para");

    document.getElementById("para").innerHTML = "this is my secound paragraph";

//find url of the document/window
let url1 = window.document.URL; 
let url2 = document.URL;

console.log(url1, url2);

// chaning the size of the image (queryselector = tag.class)
document.querySelector("img.im1").height.width = "400";
document.querySelector("img.im1").width = "600";


// find the amout of links in the documnet 
document.getElementById("demo").innerHTML = "the number of links: " + document.links.length;


// CHANGING HTML

// change the text of an Element
document.getElementById("paraa").innerHTML = "I have changed the text and will add color";

// style element

document.getElementById("paraa").style.backgroundColor = "gray";

function changeColor() {
    document.getElementById("button1").style.color = "red";
}

// set and change elemnts properties 

var paraa = document.getElementById("paraa");

// Set atribute (class) to paraa
paraa.setAttribute ("class", "paraa");

// changed attribute (class) to paraa1
paraa.className = "paraa1";

// removed attribute class
paraa.removeAttribute ("class");

// create DOM element 
var p2 = document.createElement("p");
// add element to DOM body
document.body.appendChild(p2);

// create DOM textnode 
var txt3 = document.createTextNode ("this is my textnode");
// add textnode to p2(p) element
p2.appendChild(txt3);

// set attributes for element
p2.setAttribute ("id", "p2");

// select element and change font size 
document.getElementById("p2").style.fontSize = "20px";



// DYNAMIC HTML

// displaying date and time on screen changes everytime you refresh
document.getElementById("demo1").innerHTML = "date :" + Date();

// takes 5 secounds before the date is displayed (refreshes itself every 5 sec also)
setInterval(() => document.getElementById("demo").innerHTML = "Date :" + Date(), 5000); 

// randomize background color every 5 sec between blue and red

setInterval (() => {
    if (Math.random() > 0.5) {
        document.body.style.backgroundColor = "blue";
    } else {
        document.body.backgroundColor = "red";
    }
}, 5000);