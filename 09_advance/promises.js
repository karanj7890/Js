const promiseOne= new Promise(function(resolve,reject){
    // do an async task
    // DB, cryptography,network call 
    setTimeout(function(){
        console.log('Async task is completed');
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log('Promise Consumed');
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    },1000)
}).then(function(){
    console.log('promise 2 consumed');
})

const promisethree= new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: "youtube", email: "k@karan.com"})
    },1000)
})

promisethree.then(function(user){
    console.log(user);
})

const promiseFour= new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "Karan",password:"1234"})
        }
        else{
            reject('ERROR: something went wrong')
        }
    },1000)
})

promiseFour.
then((user)=>{
    console.log(user);
    return user.username
})
.then((username)=>{
    console.log(username);
})
.catch(function(err){
    console.log(err);
}).finally(()=>{console.log("either rejected or resolved");})


const promiseFive= new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "Javascript",password:"1234"})
        }
        else{
            reject('ERROR: JS went wrong')
        }
    },1000)
})

async function consumePromiseFive(){
    try {
        const respnse= await promiseFive
        console.log();
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()


// async function getallUsers(){
//     try {
//         const response= await fetch('https://jsonplaceholder.typicode.com/users')
//         const data= await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log('E:', error);
//     }
// }
// getallUsers()

// fetch('https://api.github.com/users/karanj7890')
// .then((respnse)=>{
//     return respnse.json()
// })
// .then((data)=>{
//     console.log(data);
// })
// .catch( (error)=> console.log(error))


const url = 'https://shazam.p.rapidapi.com/shazam-events/list?artistId=73406786&l=en-US&from=2022-12-31&limit=50&offset=0';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
		'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
	}
};
async function getSong(){
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

getSong()
