//for of 
const arr= [1,2,3,4,5]
for (const num of arr) {
    // console.log(num);
}

const greetings= "hello karan"
for (const greet of greetings) {
    // console.log(`Each char is: ${greet}`);
}

// maps
const map= new Map()

map.set('IN',"India")
map.set('UN',"USA")

// console.log(map);

for (const [key,value] of map) {
    // console.log(key,':',value);
}

const myObject= {
    'Game 1':'NFS',
    'Game 2': 'COC',
    'Game 3': 'GTA'
}

// for (const [key,value] of myObject) {
//     console.log(key,':',value);
// } Not working