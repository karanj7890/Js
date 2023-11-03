const user={
    username:"Karan",
    price:599,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}
// this function talks about current context 

// user.welcomeMessage()
// user.username = "Harsh"
// user.welcomeMessage()

// console.log(this);


// function chai(){
//     console.log(this);
// }

// chai()

const chai= () => {
    let username= "Karan"
    console.log(this.username);
}

// chai()

//arrow function
// const addTwo= (num1,num2)=>{
//     return num1+num2
// }

// console.log(addTwo(3,7));

//implicit return
const addTwo= (num1,num2) =>  (num1+num2)
console.log(addTwo(3,7));