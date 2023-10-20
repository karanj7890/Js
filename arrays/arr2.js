const marvel= ["thor","spiderman","Ironman"]
const dc= ["superman","flash","batman"]

//marvel.push(dc)

// console.log(marvel[3][1]);

// const all_heroes = marvel.concat(dc)
// console.log(all_heroes);


//Use of Spread Operator

const new_heroes= [...marvel,...dc]
// console.log(new_heroes);

const another_array= [1,2,3,[4,5,6],7,[6,7,8,[4,5]]]

const real_array= another_array.flat(Infinity)
// console.log(real_array);


// console.log(Array.from("Karan"));

let score1= 100
let score2= 200
let score3= 300

console.log(Array.of(score1,score2,score3));