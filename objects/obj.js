//singleton
//Object.create
//objects literals

const mySym= Symbol("key1")

const js= {
    name:"Karan",
    place:"Jaipur",
    [mySym]:"key2",
    age: 20
}
// console.log(js.place);
// console.log(js["place"]);

// console.log(js[mySym]);
//change the values
js.place = "Haldwani" 
// console.log(js.place);

//if we have to freeze the objects
// Object.freeze(js)

js.place = "delhi" 
// console.log(js);  // the object has been freezed

js.greeting= function(){
    console.log("hello js user");
}
js.greetingTwo= function(){
    console.log(`hello js user,${this.name}`);  //string interpolation
}

console.log(js.greeting());

console.log(js.greetingTwo());
