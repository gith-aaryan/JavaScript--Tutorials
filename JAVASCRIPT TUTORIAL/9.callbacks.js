/* async wait >> promises chain >> callback hell */

// SYNCHORONOUS --> Synnchronous programming means that the code runs in a particular sequences of instruction given in the program.   Each instruction waits for the previous instruction to comp0lete its exectuion.

// ASYNCHRONOUS --> due to synchronous programing , sometimes imp instruction get blocked due to some previous instruction , which causes a delay in the UI . Asynchronous code execution allows to execute next instruction immediately and does not blo0ck the flow of execution ( parrallel running )


function hello() {
    console.log("hello world!")
 
}

setTimeout(hello , 2000);    // 2sec = 2000 milisec. ,,,,,, settimeout  Callback leta hai like in this case "hello"

//-----using arrow function 

setTimeout(() => {
    console.log("Asynchronous code!")
}, 2000);


// --- 

console.log("1");
console.log("2");

setTimeout(() => {
    console.log("execution delay '3'")
}, 2000);

console.log("4");
console.log("5");

/* Callback (Function) --> a callback is a function passed as an argument to another function.   -- they both work as (syynchronus) and (asynchronous) using setTimeout */

function sum(a,b) {
    console.log(a + b );
}

function calculator(a , b , sum){
    sum(a,b);
}

calculator( 10, 20 , sum );

///--- nesting in conditional prob & loops

let age = 19;
if(age >= 18){
    if(age >= 60){
        console.log("senior citizen");
    } else {
        console.log("adult");
    }
}
else{
    console.log("child");
}



for(let i = 0; i <5; i++){
    let str = "";
    for(let j = 0; j < 5 ; j++){
        str = str + j;
}
console.log(i,str);
}

//  Callback Hell --> nested callbacvks stacked below one another forming a pyramid structure . ( Pyramid of Doom ). this programiing becomes more difficult to understand & manage.

function getData(dataId , getNextData){
    setTimeout(() => {
        console.log("data", dataId);
        if (getNextData) {
            getNextData();
         }
    }, 2000)
}

getData(1 , () => {
    console.log("getting data 2...")
    getData(2 , () => {
        console.log("getting data 3...")
        getData(3 , () => {
            console.log("getting data 4...")
            getData(4);
        })
    })
})                                   /* PYRAMID of DOOM */ 

/* PROMISES --> promises is for 'eventual' completetion task . it is an object in JS . it is solution of callback.  it has too state handler ( resloved , rejected ).
- (resolve & reject)  are callbacks provided by JS . resolve for result & error for reject */

 

 let promise = new Promise(( resolve , reject ) => {
    console.log("hey I'm promise");
    resolve("success");
 }); 

 const getPromise = () =>{
    return new Promise((resolve , reject) => {
        console.log(" i love you");
        resolve("success")
        reject("network fail")

    })
 }
 let love = getPromise();
 love.then((res) => {
    console.log('promise fullfilled', res) /// result
 });

 love.catch((err) => {
    console.log('promise failed', err)     /// error
 });

//--Promise chaining 1st eg.

 function getData(dataId , getNextData){
    return new Promise((resolve , reject) =>{
    setTimeout(() => {
        console.log("data", dataId);
        resolve("success");
        if (getNextData) {
            getNextData();
         }
    }, 2000);
    });
}

console.log("fetching all data...")
getData(100)
.then((res) => {
    return getData(200);
})
.then((res)=>{
    return getData(300);
})
.then((res) =>{
    console.log("all data fetched successfully");
})

 
// --Promise Chaining 2nd eg.

function asyncfunction1() {
    return new Promise((resolve , reject) => {
    setTimeout(() =>{
        console.log("iron-man");
         resolve("successfully printed");
    }, 5000)
    });
}

function asyncfunction2() {
    return new Promise((resolve , reject) => {
    setTimeout(() =>{
        console.log("spiderman")
        resolve("successfully printed")
    }, 5000)
    });
}

console.log('fetching data1....');
asyncfunction1().then((res) =>{
    console.log('fetching data2....');
    asyncfunction2().then((res) =>{});
});
    
/* ASYNC -AWAIT --> async function is keyword which returns a promise.

syntax---> async function myFunc() {...}

await pauses the execution of its surrounding aysnc function until the promises is settled. 
await is only used in async function not in other function*/

async function hello(){
    console.log("async-await function")
}

//-->
function api() {
    return new Promise ((resolve , reject) =>{
        setTimeout(()=>{
            console.log('weather data')
            resolve('200')
        },2000)
    })
}

async function getWeather() {
    await api();
}


//--> 
 function getData(dataId , getNextData){
    return new Promise((resolve , reject) =>{
    setTimeout(() => {
        console.log("data", dataId);
        resolve("success");
        if (getNextData) {
            getNextData();
         }
    }, 2000);
    });
}

async function getAllData (){
    console.log('getting data archit...')
    await getData('archit');
    console.log('getting data yuvraj...')
    await getData('yuvraj');
    console.log('getting data sheru...')
    await getData('sheru');
    console.log('getting data bhoora...')
    await getData('bhoora');
    
}

/*IIFE ( Immediatedly Invoked Function Expression ). 
it is used for async -await for immedeate execution of code without calling function manually*/

(async function  (){
    console.log('getting data archit...')
    await getData('archit');
    console.log('getting data yuvraj...')
    await getData('yuvraj');
    console.log('getting data sheru...')
    await getData('sheru');
    console.log('getting data bhoora...')
    await getData('bhoora');
    
}) ();
