const array1 = [1, 2, 3, 4,5]

// const myTotal= array1.reduce(function(acc,currvalue){
//     console.log(`acc: ${acc} and currval: ${currvalue}`);
//     return acc+currvalue
// },0)

const myTotal= array1.reduce( (acc,currval) => acc+currval,0)
// console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const pay= shoppingCart.reduce( (acc,item) =>acc+ item.price ,0)
console.log(pay);