const userEmail= "karan@ai"
if(userEmail){
    // console.log("got it");
}
else{
    // console.log("not got it");
}


// falsy values
// false,0,-0,Bigint 0n,"",null,undefined,NaN

// truthy values
// "0","false", " ",[],{},function(){}

if(userEmail.length==0){
    // console.log("empty array");
}

const objemp={}

if(Object.keys(objemp).length==0){
    // console.log("object empty");
}

// nullish coalescing opearator ?? : null undefined

let val1;
// val1= null??10
// val1= undefined ?? 12
val1= null??10??16
console.log(val1);

//terniary opeartor
const iceTeaPrice= 100
iceTeaPrice>=80 ? console.log("less than 80") : console.log("more than 80")

