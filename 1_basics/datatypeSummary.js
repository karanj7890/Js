// primitive
/*
they are basically call by value
changes are done in the copy
7 types:  Strings, Boolean, Number, null,undefined,Symbol,BigInt

*/
const score= 100
const isLoggedIn= false
const name= "Karan"
const num= 100.97
let userEmail;
const id= Symbol("1234")
const anId= Symbol("1234")
// console.log(id===anId);
const bigNumber= 3827893797497n

//Dynamic Type Language
/*
Refernce data types (Non Primitive Data types)
Array, Objects, Functions

return type is object or it's type is object
*/
const hero= ["shaktiman", "naagraj","spiderman"];
let myObj={
    name: "Karan",
    age: 21,
}

const myfunc= function(){
    // console.log("hello");
}

//********************************************************************** */

//Stack and Heap Memory 
/*
Stack => Primitive      copy value mein change hoga
Heap => Non Primitive   original value mein change hoga
*/
let myYoutube= "karanjalal"
let anotherName= myYoutube

anotherName= "chaiaurcode"
console.log(anotherName);
console.log(myYoutube);

// Heap (Non Primitive Type)
let userOne= {
    name: "Karan Jalal",
    upi: "karanjalal@okrbi"

}

let userTwo= userOne

userTwo.name = "Ritik"

console.log(userTwo.name);
console.log(userOne.name);