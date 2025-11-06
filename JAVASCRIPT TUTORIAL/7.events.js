/* In JavaScript, events are actions or occurrences that happen in the browser, which the code can respond to. Common examples include:
  the change in the state of an object is known as Event.

  Events are fired to notify code of "interesting changes" that may affect code execution.

: A user clicking a button (click event)
: Typing in a text field (input or keydown event)
: A web page finishing loading (load event)
: Moving the mouse (mousemove event)

JavaScript lets you listen for these events and run code in response. This is called event handling */

let btn = document.querySelector('#btn');

btn.onclick = () => {
    console.log("btn was clicked");
    let a = 25;
    a++;
    console.log(a); // 26
}

/* : Event: The action (like a click).
: Event handler: The function that runs when the event occurs.
: Event listener: The code that waits for the event and calls the handler. */

// JavaScript ki file me likhi hui events handling or inline HTML me likhi hui eveents handling me ,,, JS ki priority high hai , agar dono same hai.
// ek hi event handler me multiple function likh saktey hai. + agar same line of code same events me likha hai to oveerriding ki problem ayegi or hamesa last wla method print hoga.


let eveBtn1 = document.querySelector('#eveBtn');

eveBtn1.ondblclick = (eve) => {
    console.log(eve);
    console.log(eve.type);
    console.log(eve.target);
    console.log(eve.clientY , eve.clientX);
};

// EVENT LISTNER --> An event listener in JavaScript is a method that waits for a specific event (like a click, keypress, etc.) to happen on an element, and then runs a function (event handler) when that event occurs.

let eveBtn2 = document.querySelector('#eveBtn');

eveBtn2.addEventListener("click", (eve) => {
   console.log(eve.type)
});


eveBtn2.addEventListener("click", () => {
   console.log("add-listner1")
});

eveBtn2.addEventListener("click", () => {
   console.log("add-listner2")
});

const handler3 = () => {
   console.log("add-listner3")
};
eveBtn2.addEventListener('click' , handler3)

eveBtn2.addEventListener("click", () => {
   console.log("add-listner4")
});

eveBtn2.removeEventListener("click" , handler3)  // node.removeEvenListner(event , callback) --> callback refernce should be same to remove .        callback is also a called handler

// toggle button to change dark and white display screen .

let modeBtn = document.querySelector(".mode");
let body = document.querySelector("body");
let curMode = "light";  // dark

modeBtn.addEventListener("click", () => {
    if (curMode === "light"){
        curMode= "dark";
        body.classList.add("dark")
        body.classList.remove("light") 
    } else {
        curMode = "light";
        body.classList.add("light");
        body.classList.remove("dark")
    }

    console.log(curMode); 
})