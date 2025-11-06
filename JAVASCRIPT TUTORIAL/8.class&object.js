/* CLASSES & OBJECTS */

// Prototype --> JS objects have a special property called protype . prototype  is also a object. it has also propeeties and methods 

//Object --> a javascript object is an entity having state & behaviour ( properties & methods ).  in JavaScript, an object is a fundamental data structure that allows you to group related data and functions together. Think of it as a container for properties and behaviors, much like an object in the real world.

let student = {
    fullName: "aaryan yadav",
    age: 20,
    isPass : true,
    marks : 9.2,
    printMarks: function() {
        console.log(this.marks);
    }
}

// In js array is also objects 

let employee = {
    calcTax1() {
        console.log("tax rate is 10%");
    } ,
    calcTax2 : function() {
        console.log("tax rate is 10%");
    }
};

employee.calcTax1();
employee.calcTax2();

 let karanarjun = {
    salary : 50000, 

 };

 let sherkhan = {
    salary : 20000, 
    calctaxZ() {
        console.log("tax rate is 5%");

    }
 }
// we can set prototype using __proto__
// proptotype is a refernce of an object
// if object & prototype have same method, objects method will be used
karanarjun.__proto__ = employee ; 
sherkhan.__proto__ = employee ; 


// Classes --> class is  a 'program  code template' for creating objects.  those objects have some states (variables) & some behaviour (function ) inside in it . 

class ToyotaCar {
    constructor(brand , milage){
        console.log('creating a new car');
         this.brandName = brand;
         this.milage = milage;
    }
    start() {
        console.log("start")
    }
    
    stop() {
        console.log("stop")
    }

    setBrand(brand){
        this.brandName = brand;
    }
}
    

let fortuner = new ToyotaCar('fortuner' , 10);

fortuner.start();
fortuner.stop();

let lexus = new ToyotaCar();

lexus.brandName = "lexus";

// INHERITANCE -- > It's a fundamental concept in Object-Oriented Programming (OOP). Inheritance in JavaScript is a feature that allows one class (or object) to acquire properties and methods from another class (or object). This helps in code reuse and organizing related functionality.

// if child and parent have same method  , child's method will be used  ( --METHOD OVERRIDING-- )

class parent{
    hello(){
        console.log("hello child");
    }
    }

    class child extends parent{}
    let childObj = new child();
    childObj.hello();

// --------------

 class animal{
    constructor(){
        this.species = "mammal";
    }
    eat(){
        console.log("eat");
    }
}

class dog extends animal{
    constructor(name){
        super(); // to invoke parent class constructor ,,super keyword --> The super keyword is used to call the constructor of its parent class to access the parent's properties and methods.

        this.name = name;
    }
    bark(){
        console.log("woof");
    }
}

class cat extends animal{
    meow(){
        console.log("meow");
    }
}

let dog1 = new dog("buddy");
dog1.eat();
dog1.bark();

let cat1 = new cat();
cat1.eat();
cat1.meow();

// super keyword --> The super keyword is used to call the constructor of its parent class to access the parent's properties and methods.

// Question 
let DATA = " SECRET INFORMATION ";

class user {
    constructor (name , email){
        this.name = name ; 
        this.email = email;

    }
    viewData(){
        console.log("data =", DATA)
    }
}
class Admin extends user{
    constructor(name , email){
        super(name , email);
    }
    editData(){
        DATA = "new secret information"
        
    }
}

let user1 = new user ("aaryan" , "aaryan@gmail.com");
let user2 = new user ("sanya" , "sanya@gmail.com");

user1.viewData();
user2.viewData();

let admin = new Admin ("admin" , "admin@gmail.com");

admin.editData();
admin.viewData();

user1.viewData();
user2.viewData();

// TRY-CATCH Block

let a = 5;
let b = 6 
console.log( a + b );
console.log( a - b );


try{
console.log( a * c ); // error
}
catch(error){
console.log(error)
}

console.log( a / b );