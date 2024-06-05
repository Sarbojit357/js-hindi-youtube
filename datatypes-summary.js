//Primitive Type
// 7 types : String, Number, Boolean, Null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3
const isLoogedIn = false;
const outsideTemp = null;
let userEmail; //undefined

console.log(typeof score); //number
console.log(typeof scoreValue); //number
console.log(typeof isLoogedIn); //boolean
console.log(typeof outsideTemp); //(Imp)*return type of null is object

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)

const bigNumber = 345678912345742n

//Reference Type(Non Primitive)
//Array, Objects, Functions

const heros =["shaktiman", "naagraj","doga"];

//Object
let myObj ={
    name : "hitesh",
    age : 22,

}
console.log(heros);
console.log(myObj);

//function
const myFunction = function(){
    console.log("Hello World");
}

console.log(myFunction);

//Read  from here : https://262.ecma-international.org/5.1/#sec-11.4.3