// const tinder= new Object()  //singelton object
const tinderUser= {}  //non singleton obj
tinderUser.id= "1239asas"
tinderUser.name= "Jack"
tinderUser.isLoggedIn= false

// console.log(tinderUser);

const regularUser= {
    email: "karan@gmail.com",
    fullname:{
        username:{
            firstname: "Karan",
            lastname: "Jalal"
        }
    }
}

// console.log(regularUser.fullname.username.firstname);

const obj1={1: "a", 2: "b"}
const obj2= {3: "c" , 4: "d"}

// const obj3= Object.assign({},obj1,obj2)
const obj3= {...obj1,...obj2}  //spread operator
// console.log(obj3);

const user= [
    {
        id: 1,
        email: "k@gmail.com"
    },

    {
        id:2,
        email: "h@aaf"
    }
]

// console.log(user[1].email);

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));  // it will tell us about if the object has the property in it or not
