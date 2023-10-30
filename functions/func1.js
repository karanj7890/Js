function sayMyName(){
    console.log("K");
    console.log("A");
    console.log("R");
    console.log("A");
    console.log("N");
}

// sayMyName()

// function addTwoNo(number1, number2){  // in this the elements inside parenthesis are called parameters
//     console.log(number1 + number2);
// } 

function addTwoNo(number1, number2){  
    
    // let res= number1 + number2
    // return res

    return number1 + number2
}

const res = addTwoNo(6,8)  // in this the elements inside parenthesis are called arguments

// console.log("Result: ", res);


function loginMessage(username){
    // if(username===undefined){
    //     console.log("please enter the username");
    //     return
    // }
    if(!undefined){
        // console.log("please enter the username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginMessage("Karan"));

// console.log(loginMessage());
//******************************************************* */
function calculateCartPrice(...num1){ //here we are using rest operator
    return num1
}

// console.log(calculateCartPrice(200,400,800));

const user= {
    username: "karan",
    price: 200
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user)
handleObject({
    username: "Ritik",
    price: 400
})

const myArray= [200,400,500,800]

function secondValue(getArray){
    return getArray[1]
}

// console.log(secondValue(myArray));
console.log(secondValue([100,700,600,300]));