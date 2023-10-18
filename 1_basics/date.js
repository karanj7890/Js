// Dates

let myDate= new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleDateString());

// console.log(myDate.toLocaleString());

// console.log(typeof myDate);

//let createdDate= new Date(2023,0,15)
//let createdDate= new Date(2023,0,15,8,9)
// let createdDate= new Date("2023-01-14")
let createdDate= new Date("01-14-2023")
//console.log(createdDate.toLocaleString());

let TimeStamp= Date.now()
//console.log(TimeStamp);

//console.log(createdDate.getTime());

//console.log(Math.floor(Date.now()/1000));

let newDate= new Date()
console.log(newDate.getMonth());
console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday:"long"
})