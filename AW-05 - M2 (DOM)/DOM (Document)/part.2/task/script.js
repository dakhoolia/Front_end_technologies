// creating title
const h1 = document.createElement("h1");
const h1Txt = document.createTextNode("JavaScript HTML DOM");
    h1.appendChild(h1Txt);
        document.body.appendChild(h1);
// creating container div
const div = document.createElement("div");
    document.body.appendChild(div);

// creating all p and textnodes appended to each
const p = document.createElement("p");
const pTxt = document.createTextNode("add a new HTML Element");
    p.appendChild(pTxt);

const p1 = document.createElement("p");
const pTxt1 = document.createTextNode("this is new");
    p1.appendChild(pTxt1);

const p2 = document.createElement("p");
const pTxt2 = document.createTextNode("this is a paragraph");
    p2.appendChild(pTxt2);

const p3 = document.createElement("p");
const pTxt3 = document.createTextNode("This is another paragraph");
    p3.appendChild(pTxt3);


// appending all p to div 

div.appendChild(p);
div.appendChild(p2)
div.appendChild(p3);
div.insertBefore(p1, p2);


// TASK COMPLETED