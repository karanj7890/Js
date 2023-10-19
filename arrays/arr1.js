//Array

const myArr= [0,1,2,3,4]

const myArr2= new Array(0,1,2,4,5)
// console.log(myArr2[2]);

//Array Methods

// myArr.push(6)
// myArr.push(8)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr);

// console.log(myArr.includes(6));

// console.log(myArr.indexOf(4));

const newArr= myArr.join()

// console.log(myArr);
// console.log(typeof newArr);

//slice and splice 
console.log("A",myArr);

const myn1= myArr.slice(1,3)

console.log(myn1);
console.log("B",myArr);

const myn2= myArr.splice(1,3)
console.log("C",myArr);

console.log(myn2);

//slice returns a piece of the array but it doesn't affect the original array. splice changes the original array by removing, replacing, or adding values and returns the affected values.