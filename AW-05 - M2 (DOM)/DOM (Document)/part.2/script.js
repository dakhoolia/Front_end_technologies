
document.getElementById("h1").style.border = "5px dotted black";

// changes value of (element) when its clicked to oppps
function changeText(id) {
    id.innerHTML = "OPPPPS";
}

document.getElementById("img1").style.height = "250px";
document.getElementById("img1").style.width = "500px";

// this is adding event without adding onClick in html 
function changeText1 () {
    document.getElementById("p1").innerHTML = "you click we change!!"
}

// calling back the function when text is clicked (onClick)
document.getElementById("p1").onclick = changeText1;
// adding cursor to be a pointer
document.getElementById("p1").style.cursor = "pointer";


// we can add as many listeners to one event as we want

// change text and alert when h1 is cicked
document.getElementById("h1").addEventListener ("click", myFunction);
    function myFunction() {
        alert ("you changed text");
        document.getElementById("h1").innerHTML = "you changed text";
        }
// console.log when h1 is clicked
document.getElementById("h1").addEventListener ("click", myFunction2);
        function myFunction2() {
            console.log("you changed text");
        }
// alert eveytime page is resized 
window.addEventListener("resize", myFunction3);
        function myFunction3() {
            alert ("you resized the page");
        }

// we can also use arrow functions 
// alert everytime window is clicked 
/*window.addEventListener ("click", () => myFunction4("Danial"));
        function myFunction4(name) {
            alert ("hello " + name + " :)");
        }
*/

// there are two ways of propagating events (bubbling) and (capturing)

// bubbeling: Inner elements are handeled first and outer last 
/* capturing: outer elements first and inner last (this is the default)
we can specify which to use by passing third parameter: useCapture*/

// if this parameter is true: capturing

// bubbleing: the innerelement (p) is alerted first
document.getElementById("para1").addEventListener("click", function (){
alert ("you clicked the blue element!");
}, false);

document.getElementById("myDiv1").addEventListener("click", function() {
    alert("you clicked the yellow element!");
}, false);

// capturing: the Outer element (div) is alerted first
document.getElementById("para2").addEventListener("click", function(){
    alert("you clicked the blue element");
}, true);
//document.capturingelement().eventlistener(event, event-handler)
document.getElementById("myDiv2").addEventListener("click", function(){
    alert("you clicked the yellow element")
}, true);

//to react to an event you add an event handler f.ex a function
// eventListener (listens) for the event while handler runs desired action

// you can remove an eventListenere with removeEventListener(click,)

const btn = document.getElementById("button");

function random(number) {
    return Math.floor(Math.random() * (number+1));
}

function changeBackground() {
    const rndCol = `rgb(${(random(255))}, ${random(255)}, ${random(255)})`;
    document.body.style.backgroundColor = rndCol;
}

btn.addEventListener("click", changeBackground);
// event no longer works
btn.removeEventListener("click", changeBackground);


//other event listener
window.addEventListener("keydown", function(e){
    console.log("you clicked the key " + e.key);
});


// task button

const btn2 = document.getElementById("button2");

btn2.addEventListener("click", () => {
    alert ("hello World");
    btn2.innerHTML = "clicked";
    btn2.style.backgroundColor = "green";
});






// DOM CSS

// setting a style
document.getElementById("para1").style.border = "dotted 10px yellow";
document.getElementById("para2").style.border = "dotted 10px yellow";

// resetting a style
document.getElementById("para1").style.border = null;


let p2 = document.createElement("p");
let txt = document.createTextNode ("helloooo bro");
document.body.appendChild(p2);
p2.setAttribute("id","para3");
p2.setAttribute("style","background-color: yellow;");

p2.appendChild(txt);

// get style information of the DOM

const element = document.getElementById("para3");
let out = "";
const elementStyle = element.style;
const computedStyle = window.getComputedStyle(element, null);

for (const prop in elementStyle) {
    if (Object.hasOwn(elementStyle, prop)) {
        out += `${prop} = '${elementStyle[prop]}' > '${computedStyle[prop]}'\n`; 
    }
}
// gives all the style details of the element regardless of default or set
console.log(out);




// DOM ANIMATIONS

function myMove() {
    let id = null;
    const elem = document.getElementById("animate");
    let pos = 0;
    clearInterval(id);
    id = setInterval(frame, 10);
    function frame() {
        if (pos == 350) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + "px";
            elem.style.left = pos + "px";
        }
    }
}


// starting point of element
var ol = 0;
// (which function and how fast the interval is)
var circleInterval = setInterval(circleAnimation, 50);
// the function for the interval
function circleAnimation() {
// if elemnt reaches 450 or heigher (clearinterval/stop)
if (ol >= 450) {
    document.getElementById("circle").style.backgroundColor ="dimgrey";
    clearInterval(circleInterval);
}
else {
// before it reaches 450 increment the position of the element by 1 each (50^)
    ol++;
    // top and left position will increment 
    document.getElementById("circle").style.top = ol + "px";
    document.getElementById("circle").style.left = ol +"px";
    }

} 

var isPlaying = false
var circleInterval2;

function circleAnimation2 (time) {
    ol++;
    document.getElementById("circle2").style.top = ol + "px";
    document.getElementById("circle2").style.left = ol + "px";
    circleInterval2 = requestAnimationFrame(circleAnimation2);
}

function mouseClicked () {
    if (isPlaying) {
        isPlaying = false;
        document.getElementById("circle2").style.backgroundColor ="dimgrey";
        cancelAnimationFrame(circleInterval2);
        
    } else {
    isPlaying = true;
    document.getElementById("circle2").style.backgroundColor ="yellow";
    circleInterval2 = requestAnimationFrame(circleAnimation2);
    }
}

document.getElementById("circle2").addEventListener("click", mouseClicked);
document.getElementById("circle2").style.backgroundColor ="dimgrey";




//DOM FORM VALIDATION
/* 
- the form is a set of controlls for the <form> elements children
- clicking the submit buttons triggers the submit event
- we want this to trigger our validation function 
- validation = chekcking if data is correct 
*/

function validateForm() {
    // x = value of the form(myForm) and input(fname) 
    let x = document.forms["myForm"]["fname"].value;
    // if x = an empty string return false and alert
    if (x == "") {
        alert("name must be filled out");
        return false;
    // task/ test
    } else if (x.length > 10) {
        alert ("pls write a shorter name");
        return false;
    } else {
        // otherwise return hey + x(value submitted)
        alert ("hey: " + x);
    return true; }
}


// how to select a form in Document [index]
const selectForm = document.forms[1];

// how to select an element inside of a form
const selectFormElement = document.forms[2].elements[0];

console.log(selectFormElement);


// Named form access
const loginForm = document.forms.login; //or forms["login"];

// could also use elements.email/[index]
loginForm.elements["email"].placeholder = "test@example.com";
// when you use [] there's no need for dot before
loginForm.elements[1].placeholder = "password";



// DOM NODES

/* 
- everythin in the DOM tree is a Node
- with knowing this structure we can insert emenets in the position desired
- first we select a node and decide if we want new elemnt as child or parent
- selectedElement.AppendChild(new elemnt) 
- selectedElemnt.insertBefore(newElement, childElement)
- if we do not spcify child element, new element is inserted at end of selected element
*/

// Examples 

const para = document.createElement("p");
const node = document.createTextNode("this is new");
para.appendChild(node);

const element1 = document.getElementById("div1");
const child = document.getElementById("p5");
// insert the created element (para) before (child) the first child in div 
element1.insertBefore(para, child);


// how to create and add element in the middle of a document (sibling)
const div0 = document.createElement("div");
const node1 = document.createTextNode("this is another node");
div0.appendChild(node1);


const child2Newdiv = document.getElementById("div1");
// if child was not defined element (div0) would be added to end of document 
document.body.insertBefore(div0, child2Newdiv);

// to remove an elemnt we need to use parent.removeChild (child)
element1.removeChild(para);

// to replace child we use parent.replaceChild(newElement,child);
document.body.replaceChild(para, div0);

/* 
elment node = <tags>
text node = <tag>content between the tags<tag>
attribute node = name/id/Atrribute="blabla">
value node = <tag id ="this_is_node_value"<
*/


