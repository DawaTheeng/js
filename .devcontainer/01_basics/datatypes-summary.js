// Primitive

// 7 types : String, number, boolean, null, undefined, symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedin = false
const outsideTemp = null
let userEmail; //undefined

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

//const bigNumber = 23456776543456445n


// Reference (Non Primitive):

// Array, Objects, Functions

//Array
const heros =["Shatiman", "naagraj", "doga"];

//Objects   {   }
let myobj = {
    name: "Dawa",
    age: 22,
}

//Functions  function(){}
const myFunction = function(){
    console.log("Helllo world");
}

console.log(typeof myFunction);

// https://tc39.es/ecma262/#sec-ecmascript-data-types-and-values


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive),  Heap (Non-Primitive)-> Reference

let myYoutubename = "Dawa123.com"

let anothername = myYoutubename
anothername = "paulcode"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "Dawa@google.com"

console.log(userOne.email);
console.log(userTwo.email);