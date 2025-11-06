// loops and strings

// never runs the infinite loops into the system because of system failure , website crashs , excessive storage .

// for loops
for ( let i = 1 ; i <=5; i++ ){
    console.log(" hellowww for loop" + i )
}
console.log("loop ended");

// initilize - i = 1 , stopping condition - i <= 10 , updation - i++

// sum of  number 1 to n 
 let sum = 0;
 let n = 15
 for ( let i = 1; i <= n; i++) {
sum = sum + i;
 }
 console.log("sum = ", sum);
 console.log("loop ended");

 // while loops 

let i = 1;
while ( i <= 5) {
    console.log("while loop", +i )
    i++;
}
console.log("while loop ended")

// do-while loops --- at least one iteration will execute
let j = 20;
do {
    console.log("do-while loop", +j )
    j++;
} while( j <= 10);
console.log("do-while loop ended");

// for-of loops
let str = "javascript";

let length= 0;
for(let char of str){
    //iterator --> character
    console.log("character =", char);
    length++;
}

console.log("length of string =", + length)


// for-in loop

let student = {
    name : " aaryan yadav", 
    age : 20,
    isPass : true,
    cgpa : 9.2,
};

for ( let key in student) {
    console.log("key=",key, "value=", student[key]);
}

// print all even numbers from 0 to 100.

 for( let num = 0; num <= 30; num ++){

    if ( num%2 === 0){
        console.log (" num =", num);
    }
}

/*create a game where you start with any random game number . ask the user to keep guessing the game number until the user enter correct value .

let gameNum = 25;

let userNum = prompt (" guess the game number: ");

while (userNum != gameNum){
    userNum = prompt (" wrong guess! try again: ")
}
console.log("congratulations! you guessed the correct number: ") */

//strings --> in JavaScript strings are 'immutable' can't be changed
// strings are a sequence of characters enclosed in single or double quotes.
let string= "hello world!";
console.log("index=",string[8]);

// template literals
let specialString = `this is a special string with multiple lines and variables like ${string} and ${string[0]}`; //string interpolation
console.log(specialString);

let obj = {
    item : 'pen',
    price : 10,
} ;
//console.log(" the cost of", obj.item , "is", obj.price,"rupees");
console.log(`the cost of ${obj.item} is ${obj.price} rupees`);

let specialString2 = `this is a template literal ${1+2+2}`;
console.log(specialString2);

//escaping characters
console.log(`Apna\nCollage`); // for new line
console.log( `Apna\tCollage`)// for tab space
let string3 = `javascript\tcoding`; // escaped characters ko single character le liya jata hai --> 17 characters
console.log(string3.length );

// string methods --> method is a block of code that performs a specific task eg. log(), alert() etc. and lenght() is a property.

 let str1 = "hello world!";
 str1 = str1.toUpperCase() // convert uppercase character
 console.log(str1);

 let str2 = "HELL0 WORLD";
 str2=str2.toLowerCase(); // convert lowerecase character
 console.log(str2);

 let str3 = "       JAVA    SCRIPT       " // removes only  the starting and ending spaces from the msg not for intermidate spaces
 console.log(str3.trim());

 let str4 = "0987654321" // gives the value of starting , ending
 console.log(str4.slice(1,5))

 let str5 = "java"
 let str6 = "script"
 let result = str5.concat(str6) ; // merge two strings into single string --> str5 + str6
 console.log(result)

 let str7 = 'hellow'
 console.log(str7.replace('h','y')) // string.replace("replaceVal","newVal') ---> 'replaceAll' to replace value

let str8 = " I LOVE JAVASCRIPT" // prints the character value at the index level 
console.log(str8.charAt(8));

// question 

let fullName = prompt("Enter your fullname without spaces")

let  username = "@" + fullName + fullName.length 
console.log(username);


/* 
let userName = prompt("Enter your full Name: ");
let output = `@${userName}${userName.length}`;
console.log(output); 
*/


