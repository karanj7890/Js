const coding= ["js","cpp","py","java"]

// coding.forEach(function(val){
//     console.log(val);
// })

// coding.forEach((item) => {
//     console.log(item);
// });

// function print(item){
//     console.log(item);
// }

// coding.forEach(print)

// coding.forEach((item,index,arr) => {
//     console.log(item,index,arr);
// });

const myCoding= [
    {
        langName: "C++",
        langFileName: "cpp"
    },
    {
        langName: "javascript",
        langFileName: "js"
    },
    {
        langName: "python",
        langFileName: "py"
    }
]

myCoding.forEach((item)=>{
    console.log(item.langFileName);
})