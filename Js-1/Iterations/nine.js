const mynums=[1,2,3]

// const myTotal = mynums.reduce(function(acc,curval){
//     console.log(`acc val ${acc} currval value is ${curval} `);
//     return acc + curval
// },0)

const myTotal=mynums.reduce((acc,cur)=>acc+cur,0)
console.log(myTotal);

const shoppingCart=[
{
    itemName:"js Course",
    price:2999
},
{
    itemName:"react Course",
    price:1000
},
{
    itemName:"mobile dev Course",
    price:5000
},
{
    itemName:"data Science",
    price:450000
},
]

const priceToPay=shoppingCart.reduce((acc,item)=>(acc+item.price),0)
console.log(priceToPay);