console.log("hello world");
console.log("coding in js");
alert("hello world"); // one time , this will show an alert box in the browser
let fullName = prompt(" enter your name");
console.log(fullName); // prompt will ask the user to input their name and then log it to the console

//arithmetic operations
let a =10;
let b = 5;

 console.log("a+b =",a+b);
 console.log("a-b =",a-b);
 console.log("a*b =",a*b);
 console.log("a/b =",a/b);
console.log("a%b =",a%b);  // reamainder gives the remainder of the division
console.log("a**b =",a**b); // exponentiation gives a raised to the power of b ( a^b ) 

//unary operators

console.log("a++ =",a++);  // post-increment, returns the value before incrementing
console.log("++a =",++a); // pre-increment, returns the value after incrementing
console.log("a-- =",a--);
console.log("--a =",--a);

//aasignment operations
let x = 10;
x += 5; // x = x + 5
console.log("x += 5:", x);
x -= 3; // x = x - 3
console.log("x -= 3:", x);
x *= 2; // x = x * 2
console.log("x *= 2:", x);
x /= 4; // x = x / 4
console.log("x /= 4:", x);
x %= 3; // x = x % 3
console.log("x %= 3:", x);
x **= 2; // x = x ** 2
console.log("x **= 2:", x);

//  comparison operations
let num1 = 10;
let num2 = 20;
console.log("num1 == num2:", num1 == num2); // equality
console.log("num1 != num2:", num1 != num2); // inequality
console.log("num1 > num2:", num1 > num2); // greater than
console.log("num1 < num2:", num1 < num2); // less than
console.log("num1 >= num2:", num1 >= num2); // greater than or equal to
console.log("num1 <= num2:", num1 <= num2); // less than or equal to
//strict equality and inequality (datatype matters)
console.log("num1 === num2:", num1 === num2); // strict equality 
console.log("num1 !== num2:", num1 !== num2); // strict inequality

//logical operations           - returns boolean values( true and false )
let condition1 = true;
let condition2 = false;
console.log("condition1 && condition2:", condition1 && condition2); // logical AND. --- it returns true when both conditions are. true 
console.log("condition1 || condition2:", condition1 || condition2); // logical OR   ---it returns true when at least one condtion is true.
console.log("!condition1:", !condition1); // logical NOT --- it negates the value of condition1, if condition1 is true, it returns false and vice versa.

//Conditional statements

// eligibility for voting
let age = 25;
let age2 =15;

if (age >=18) { 
    console.log("you are eligible for vote")
}
if (age2 <18) {
    console.log("you can not vote")
}
// dark mode example
let mode= "dark";
let color;

if (mode==="dark"){
    color="black";
} else{
     color="white"
}
console.log("the color is ", color);

// number is odd/even

let number =10;
if ( number %2 === 0){
    console.log("is even",number);
} 
else{ 
console.log( "is odd",number);
}

//syntax - set of programming lanuage "rules".

//else-if statement

let screen = "white";
let backgroundcolor;

if (screen === "dark"){
    backgroundcolor ="black";
}
else if
    (screen === "blue"){
     backgroundcolor = "blue";
}
else if
    ( screen === "pink"){
    backgroundcolor ="pink"
    }
    else{
        backgroundcolor = "white";
    }
    console.log("the background color is ", backgroundcolor);

    // ternary operator - (condition? true : false)
   // compact , simple if-else statement
    let year=25;
    let result = year >= 18 ? "adult" : "not an adult";
    console.log("you are ",result);

    // MDN web-docs (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)
    
    // Switch statement

    const expr = "papaya"
    switch (expr) {
        case "oranges":
            console.log("oranges are $0.59 a pound");
            break;
            case "mango":
                console.log("mangoes are $0.49 a pound");
                break;
                case "papaya":
                    console.log("papaya are $0.38 a pound");
                    break;
                    default:
                        console.log("sorry we are out of " + expr + "");
                        break
    }