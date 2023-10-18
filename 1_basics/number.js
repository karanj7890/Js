const score= 400
// console.log(score);
const balance=  new Number(500)
// console.log(balance);
// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const other= 94.3454

// console.log(other.toPrecision(4));

const hundred= 1000000
// console.log(hundred.toLocaleString('en-IN'));

//*****************************Maths******************************* */

// console.log(Math);
// console.log(Math.abs(-7));
// console.log(Math.round(323.532));
// console.log(Math.ceil(7.3));
// console.log(Math.floor(7.3));
// console.log(Math.max(7,3,8,4));
// console.log(Math.min(7,3,5,1));

// Math.random() gives us the value between 0 and 1
// if we have to find desired value e.g- for a dice it has the number lying in the range of 1 to 6 so if we multiply the Math.random() with 10 and add 1 so it will give desired number


console.log(Math.floor(Math.random()*10) + 1);

const min= 10
const max= 30
console.log(Math.floor(Math.random() * (max-min+1)) + min);