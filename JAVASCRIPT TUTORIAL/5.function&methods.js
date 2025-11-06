/* Function & Methods */

// function ---- a block of code which perform a specific task.   A function in JavaScript is a reusable block of code designed to perform a specific task. You can define a function once and execute it whenever needed. Functions help organize code, avoid repetition, and make programs easier to maintain.

function greet(name) {
  console.log("Hello, " + name + "!");
} // function definiton

greet("Alice"); // function call or invoked

///------

function myFunction(msg){ // input - parameter
    console.log(msg)
}
myFunction("i love js") // input - argument 

//------sum of  two numbers 
 function sum ( x , y ) {
    console.log( x + y ) ; 
 }

 sum ( 3,4)

 ///------

 function Sum ( a , b ){
    // function  parameter --> local variable --> scope( variable kaha tak zinda hai,,curly bracket kle bahar wo undefined hojeyga.)
    S = a + b ;
    return S;
 }
Sum (  7 , 6 ) ;
 console.log(S)

 //--Arrow function - An arrow function in JavaScript is a shorter way to write a function using the => syntax.
 
 // sum arrow function
 function sum1(a , b){
   return a + b;
 }

 const arrowSum = ( a, b ) => a + b ;
   console.log (arrowSum(10,15));
 
// multiplication arrow function
 function multiplication1( a , b ){
   return a + b ;
 }
  let arrowMultiplication = (a , b)=> {
   return ( a + b );
}

// print "hello world!" in arrow function
  
let printHello = () => { 
   console.log ("hello world!" );
} 


//-- to count a vowels in string.

function countVowels (str) {
   let count = 0;
   for ( let char of str ) {
      if (
         char === "a" || char ==="e" || char === "i" || char === "o" || char === "u"
      )
      {
         count++
      }
   }
   return count;
}

// -- to count a vowels using arrow funct in strings.

const countVow = (str) => {
   let count = 0;
   for ( let char of str ) {
      if (
         char === "a" || char ==="e" || char === "i" || char === "o" || char === "u"
      )
      {
         count++
      }
   }
   return count;
}

/*.    for-each function --> only used for "Arrays" not for "Strings".
 for-each function --> HOM / HOF "high order function / method" which can take functrion as a parameter and return its also.

  arr.forEach( callBackFunction )

  CallbackFunction : here , it is function to execute for each elements in the arrays. 
  Callback is a function passed as an argument to another function */
let arrayyy = [ 1, 2, 3, 4, 5 ];

arrayyy.forEach ( function printVal (Val) {
console.log(Val)
}) ;

// -- Arrow for-each function
/*
forEachFunction ((val) =>{
   console.log(val);
   })
   */
let num = [ 1, 2, 3, 4, 5 ];

num.forEach((val) => {
   console.log(val)
})

// forEach function
let cities = ['pune', "hyderabad", " malad", "chennai"];
cities.forEach((val, idx , cities) => {
   console.log (val.toUpperCase(), idx , cities);
})

// QUES.- PRINTS SQAURE OF TWO NUMBERS.
 let nums = [ 63 , 52 , 39 , 48 ];

 let calcSquare = (num) => {
   console.log(num * num);

 };

 nums.forEach(calcSquare);

 // MAP --> similar to forEachFunction.  
 // n JavaScript, the map() method is a higher-order function available on Array.prototype. It is used to create a new array by applying a provided callback function to each element of the original array. The map() method does not modify the original array. 
 
 let number1 = [ 63 , 52 , 39 , 48 ];

  let newArray = number1.map ( (val1) => {
   return (val1* 2);
  }) ;

console.log(newArray);

// forEach is used to calculate arrays.  // Map is used to numbers to create new array .

/* Filter - creates a new arrays of elements that gives true for a condition / filter */

let arr = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 0 ];

let evenArr = arr.filter ( (val) => {
   return val % 2 === 0;
});
console.log(evenArr);

// Reduce() - performs some operation and reduce the array to a single value . ut returns that single values.

// accumlator - previous , result
// currentvalue - current

// to add values of array
let arr1 = [  1 , 2 , 3 , 4 , ] ; 
 const output = arr1.reduce((result , current) =>{
   return result + current;
 });

 console.log( output );

 // largest value -- for previous value
 let arr2 = [ 5 , 7 , 9 , 1 , 11 , ];

 let  output2 = arr2.reduce(( accumlator , currentValue) => {
   return accumlator >  currentValue ? accumlator : currentValue
 })
 console.log(output2);

 // more than 90 marks

 let mark = [ 91 , 93 , 85 , 56 , 90 ]
 let morethan90 = mark.filter((val) =>{
   return val > 90 ; 
 })
 
  console.log( morethan90);

  // question 

  let n = prompt (" enter a number : ");

  let arr3 = [ ];

  for ( let i = 1 ; i <= n ; i ++) {
   arr3 [i - 1] = i;
  }
  console.log (arr3);

  let submission = arr3.reduce((pre , curr) =>{
   return pre + curr ; 
  })

   console.log( " sum = ", submission);

   let factorial = arr3.reduce((pre, curr) =>{
   return pre * curr; 
  })

   console.log( "factorial = ", factorial) ;
