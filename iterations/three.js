const myObject= {
    js: "Javascript",
    cpp: "C++",
    rb:"Ruby"
}

// for in loop
for (const key in myObject) {
    // console.log(`${key} is shortcut for ${myObject[key]}`);
}

const myProgram= ["js","cpp","ruby","py"]

for (const key in myProgram) {
   //console.log(myProgram[key]);
}


// const map= new Map()

// map.set('IN',"India")
// map.set('UN',"USA")

// for (const key in map) {
//     console.log(map);
// }