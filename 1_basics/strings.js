const name= "Karan"
const num= 18

// console.log(name + num);  This type is old in string
//using backticks  String Interpolation
console.log(`Hello My name is ${name} ans num is ${num}`);

const gameName= new String('Karan-jalal-khairna') 
//it will also create strings and they are objects i.e they have a key value pair

// console.log(gameName[0]);

// console.log(gameName[0].length);

// console.log(gameName.length);

// console.log(gameName.toUpperCase());

// console.log(gameName.charAt(4));

// console.log(gameName.indexOf('e'));

const newString= gameName.substring(0,3)

console.log(newString);

const anotherString= gameName.slice(-8,4)

console.log(anotherString);

const newOne= "    Karan     "
console.log(newOne);
console.log(newOne.trim());

const url= "https://hitesh.com/hitesh%20ch"

console.log(url.replace('%20','-'));

console.log(url.includes('hitesh'));

console.log(gameName.split('-'));