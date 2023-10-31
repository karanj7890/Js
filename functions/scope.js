// var c= 300
let a= 100
if(true){
    let a= 10;
    const b= 20
}

// console.log(a);
// console.log(b);
// console.log(c);

//********************************************** */

//Nested Scopes

function one(){
    const username = "karan"

    function two(){
        const websites= "youtube"

        console.log(username);
    }
    // console.log(websites);

    two()

}
// one()

if(true){
    const username = "karan"
    if(username==="karan"){
        const websites= " youtube"
        // console.log(username + websites);
    }
    // console.log(websites);
}
// console.log(username);

//*********************************intersting ********************/
function addOne(num){
    return num+1
}

addOne(5)