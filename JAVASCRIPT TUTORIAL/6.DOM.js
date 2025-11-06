/* DOCUMENT OBJECT MODEL */

// Window Object ---> open window in browser, it is browser object (not Javascript's) & automatically created by browser. it is global object with lots of properties.

/* HTML Code is on --> Window --> Document 
 
command to see HTML documents on window. documents contains properties and methods
console.dir(window.document) */

/*DOM --> when a web page is loaded , the browser creates a 'document object model' (DOM) of the page.
( DOM ) --> is used to dynamic manipulation on web pages
 only JS can do dynamic changes ,  not HTML  & CSS*/
window.alert("Welcome!")
window.console.log( "hellow" );

// to print html code on console using "getElementById()" in  DOM ( document )
// if anychance id is not present at their on .getElementById() it returns "null" .
let heading = document.getElementById("heading1");
console.dir(heading);

let para = document.getElementById("para");
console.dir(para);


// print html code on console using "getElementsByClassName() in DOM "  .
//if anychance class is not present at their on .getElementsByClassName() it returns 'empty collection' . 
let HEADing = document.getElementsByClassName("HEAD");
console.log(HEADing);
console.dir(HEADing);

//print html code on console using ".getElementsByTagName()"
let paragh = document.getElementsByTagName('p')
console.log(paragh);
console.dir(paragh);

// ---> Query Selector 
let firsteEle = document.querySelector("p")  // 1st elements
console.dir(firsteEle);

let allElements = document.querySelectorAll("p"); // all elements --> nodelist
console.dir(allElements);

let firsteEle2 = document.querySelector("#heading1")  // 1st elements
console.dir(firsteEle2);

let firsteEle3 = document.querySelector(".HEAD")  // 1st elements
console.dir(firsteEle3);


//  DOM manipulation 'PROPERTIES'

// DOM TREE --> 1. tree nodes  2. comments   3. elements.  -- majorly in DOM we used "elements" 
 
// * tagName - returns tag for elements
 
let div = document.querySelector("div");
console.dir(div);

// * innerText - returns the text content of elements and all its children .     div.innerText();

// *innerHTML - returns the plain text and its tags also with HTML contents. 

// * textContent - returns the textual content even for hidden elements.     .textContent

//  to changes dynamically on run time in HTML --> div.innerText = "abcd"


// QUESTION.
let h2 = document.querySelector('h2');
console.dir(h2.innerText)

h2.innerText = h2.innerText + ' from aaryan !'

//  QUESTION. 
let divs = document.querySelectorAll(".box");
let i = 1;
for (div of divs) {
   div.innerText = `new value ${ i}`;
   i++;
}

/*ATTRIBUTES -->  Attributes are additional information provided inside HTML tags, such as id, class, href, src, etc.
 In the DOM, you can get, set, remove, or check these attributes using JavaScript methods like getAttribute, setAttribute, removeAttribute, and hasAttribute. */

// * getAttribute( attribute ) --> to get the attribute value

let getAtt = document.querySelector("ul")
console.log(getAtt);

let id1 = getAtt.getAttribute("id");
console.log(id1);

let paragraph = document.querySelector("p")
console.log(paragraph.getAttribute("id")) ;       // to print id = para 

// * setAttribute( attribute , value ) ---> to set the value 

let setAtt = document.querySelector("h6")
console.log(setAtt);

let id2 = setAtt.setAttribute("class","messi");
console.log(id2);

// * node.style ---> to style directly from javascript to html file. (inline styling) in HTML 
 
let divstyle = document.querySelector("span") ; 
console.log( divstyle);

divstyle.style.backgroundColor = " purple " ; 
divstyle.style.fontSize= "25px " ;
divstyle.innerText = " hellow! ";
// divstyle.style.visibility = "hidden" 

// * INSERTING ELEMENTS --> 1. first creating ,  2. then adding

let newBtn = document.createElement("button");
newBtn.innerText = "click me!";
console.log(newBtn);

// append() --> adds at the end of node.(inside)
let spanAppend = document.querySelector("span");
spanAppend.append(newBtn);

// prepend() --> adds at the start of node. (inside)
let newHeading = document.createElement("h1");
newHeading.innerHTML = "<i> Hi , I'm new Heading </i>" ;

document.querySelector("body").prepend(newHeading) ; 
 
// node.before() --> adds before the nodes (outside)
// node.after() --> adds after the nodes (outside)

// node.remove(). --> to remove the element

// aapendChild -->  DOM method used to add a node (element) as the last child of a parent node. 

let parent = document.querySelector("div");
let newElement = document.createElement("p");
newElement.innerText = "Hello!";
parent.appendChild(newElement);

// removeChild -->  DOM method used to remove a child node from its parent node. 
let parent2 = document.querySelector("div");
let child = document.querySelector("p");
parent2.removeChild(child);


// * classList --> In JavaScript, classList is a property of DOM elements that provides an easy way to access and modify the list of CSS classes assigned to an element.

let div5 = document.querySelector("div");
div.classList.add("active");
div.classList.remove("hidden");
div.classList.toggle("selected");
console.log(div5.classList.contains("active")); // true or false