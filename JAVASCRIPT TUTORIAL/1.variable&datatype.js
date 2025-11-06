console.log("hello world");
console.log("coding in js");

fullname="aaryan yadav";
age=20;
price=99.99;
k=null;
y=undefined;
isfollow=true;
console.log(fullname,age,price,k,y,isfollow);

var name=xyz;
var name=qwert;
console.log(name);  // name can be re-declared and updated

let age=50;
age=25;
age=35;
console.log(age);   // age can be updated but cannot be re-declared

let a; 
console.log(a);  // undefined

const pi ;
console.log(pi);  // we cannot declare const without initialization



{
    let subject=science;
    console.log(subject);

} // block scope
{
    let subject=computer
    console.log(subject);
} // another Block scope

let x = BigInt('123');

let y= symbol('hello world');

const student ={
    fullName : "aaryan yadav",
    age:20,
    cgpa:9.2,
    isPass:true
};
student['age'] = student['age']+1
console.log(student[fullName]);

'abcd'+1234
'abcd1234'

123+123
123123


const profile = {
    userName : "@rockyyy_.ydv",
    isFollow : true,
    followers : 999,
    following : 150

};
console.log(typeof profile);

// prefer not to used var variable ,  because of block scope and functional scope