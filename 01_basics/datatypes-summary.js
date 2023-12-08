// # Primitive:- (All Primitive Type are call by value)
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false
const outSideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
// console.log(id === anotherId);

const bigNumber = 264665798642416847n

// Reference (Non Primitive):-
//Array, Objects, Functions

const heros = ["shaktiman",  "naagraj", "doga"];//Array
let obj = {
 name: "deepraj",
 age: 22,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3