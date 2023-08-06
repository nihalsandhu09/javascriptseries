// reduce js 

const mynums = [1,2,3]

// const myTotal = mynums.reduce(function (acc,curr){
//     console.log(`${acc} , ${curr}`)
//     return acc + curr
// },0)
// const myTotal = mynums.reduce((acc,curr)=> acc +curr,0)
// console.log(myTotal);


const shoppingCart = [
    {
        itemName : "js course",
        price: 2999
    },
    {
        itemName : "py course",
        price: 999
    },
    {
        itemName : "mobile dev course",
        price: 5999
    },
    {
        itemName : "data science course",
        price: 12999
    },
    
]


 const totalprice = shoppingCart.reduce((acc,item)=> acc + item.price,0)

 console.log(totalprice)
