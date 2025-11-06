// --ARRAYS--

// index : value pair
// 0: 10
//  arrays are used to store multiple values in a single variable.
// arrays is a linear collection of data
//  arrays are mutable, can be changed.
//  arrays are zero indexed, first element is at index 0.
//  arrays can store any type of data, even other arrays or objects.
//  arrays are dynamic, can grow or shrink in size.
//  arrays are iterable, can be looped through using for loops, for-of loops, for-in loops, etc.
//  arrays are objects in JavaScript, so they have properties and methods.
//  arrays can be multidimensional, meaning they can contain other arrays as elements.
//  arrays can be used to store lists, collections, and other data structures.




// property --> returns the value from the object, eg. length, indexOf, etc.
// method --> performs an action on the object, eg.  toUpperCase, push, pop, shift, unshift, etc.

 marks = [ 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
 marks [2] =  35 // changing the value of the element at index 2

console.log("marks =", marks); // prints the array

console.log("length of marks array =", marks.length); // prints the length of the array(property)

console.log("first element of marks array =", marks[0]); // prints the first element of the array

console.log("last element of marks array =", marks[marks.length - 1]); // prints  the last element of the array

console.log("index of 50 in marks array =", marks.indexOf(50)); // prints the index of the element in the array

console.log("index of 100 in marks array =", marks.indexOf(100)); // prints the index of the element in the array

 console.log("index of 200 in marks array =", marks.indexOf(200)); // prints -1 if the element is not found in the array

 // loops in arrays
 // for loops
 let heroes = [ "iron",  "thor", "hulk", "spiderman", "batman"]
 for (let i = 0; i < heroes.length; i++){
    console.log(heroes[i]);
 }
 
 // for-of loops
 for (let hero of heroes){
    console.log(hero);
 }

let cities = ["delhi", "pune", "mumbai", "gurgaon" , "kanpur"]
for (let city of cities){
  console.log(city.toUpperCase())
}

// Average marks of students
 
let mark1 = [ 65, 32, 68, 75, 84, 96, 88, 26, 59, 43];

let sum = 0;

for (let val of mark1){
    sum += val; // sum = sum + val
}

let avg = sum / mark1.length;
console.log(`avg mark1 of class = ${avg}`);

// 10% off each items

let items = [ 250, 350 ,400, 600, 500]

let i = 0;
for( let val of items){
    let offer = val / 10;
    items[i] = items[i] - offer;
    console.log( `value after offer = ${items[i]}`)
    i++;
}

// Arrays Methods

// push
let fooditems = [ "chips", "juice", "fries", " coke"];
fooditems.push( "bread", "banana");
console.log (fooditems);

// pop
let fooditems2 = [ "chips", "juice", "fries", " coke"];
let deletedItems = fooditems2.pop();
 console.log(fooditems2)
 console.log("deleted", deletedItems)

 // toString
 let count = [ "aaryann" ,250, 350 ,400, 600, 500];
 console.log(count.toString);

 // concat
 let marvelHeroes = [ "thor", "spiderman","ironman"];
 let dcHeroes = [ "superman", "batman"]
 let indianHeroes = ["shaktiman", 'krishh', "flyingjatt"]

 let HEROES = marvelHeroes.concat(dcHeroes, indianHeroes)
 console.log("HEROES =", HEROES)

 // unshift() or shift() methods

 let fruits = [ "apple", "mango", "grapes", "oranges","banana"]
 let fal = (fruits.unshift("apple"));   // unshift starting se add karta hai
 console.log("unshift fruits = ", fruits)

 let veges = [ "tomato", "potato", "brinjal", ]
let sabji = veges.shift("tomato");    // shift -- ending se deleted karta hai
console.log( "shift fruits =  ",  veges);

// slice() or splice()

let tools = [ "pen", "pencil", "compass", "sharpner", "eraser"]
console.log(tools.slice(1 , 4))


let arr = [0,1,2,3,4,5,6,7,8,9,];
console.log(arr.splice(2, 2, 101, 102));  // splice( statringvalue , deleingvalue , newvalue)

/* ----- Add Elements without deleting anyone

arr.splice(2 , 0 , 101);

----- Delete Elements without adding new elements

arr.splice(3 , 1;

------ Replace Elements

arr.splice( 3 , 1 , 105 );
  
----------*/
