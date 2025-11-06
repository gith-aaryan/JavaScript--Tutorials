/* API - Application  Programming interface */

/*the fetch API provides an interface for fetching (sending / receiving) resources.
It uses Request and Responds objects.
The fetch() method is used to fetch a resource (data).

syntaxxxx----> let promise = fetch( URL , [option] )

An API, or Application Programming Interface, is essentially a set of rules and specifications that allow different software systems to communicate and exchange data with each other.


AJAX : Asynchronous JavaScript and XML
JSON : JavaScript Object Notation
AJAJ : Asynchronous Javascript and JSON

1. response - (JSON) --> 2. JS object

json() methods : return a second promise that resolve with the result of parsing the response body text as JSON , output is JS object.
*/


// using aysnc-await 
const URL = "https://catfact.ninja/fact";
const factPara = document.querySelector("#fact");
const btn = document.querySelector("#btn");

const getFacts = async () => {
    console.log('getting facts...');
    try {
        const response = await fetch(URL);
        const data = await response.json();
        factPara.innerText = data.fact; // Correctly access the 'fact' property
        console.log(data);
    } catch (error) {
        console.log("ERROR:", error);
    }
};

btn.addEventListener("click" , getFacts);

getFacts(); // Call the function to run it


// using promise-chaining

/*
function getFacts() {
    fetch(URL)
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        factPara.innertText = data.fact;
        console.log(data);
    })
}

btn.addEventListener("click" , getFacts);

getFacts();
*/

/* 'HTTPS verbs' mdn refernce.                ----      'RESPONSE STATUS CODE'. mdn refence. */
// HTTPS  response header also contain details about the responses , such as content type , HTTP  status code. (additional information)



// --- Sending a POST request ---

const sendData = async () => {
    console.log("Sending a POST request...");
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST', // Specify the method
            headers: {
                // Tell the server we are sending JSON data
                'Content-Type': 'application/json; charset=UTF-8',
            },
            // The data to send, converted to a JSON string
            body: JSON.stringify({
                title: 'My New Post',
                body: 'This is the content of my awesome new post!',
                userId: 1,
            }),
        });

        const responseData = await response.json();
        console.log("Response from POST request:", responseData);
        // The API will usually send back the created object with an ID
    } catch (error) {
        console.error("Error sending POST request:", error);
    }
};

sendData(); // Call the function to send the data

// using promise-chaining


