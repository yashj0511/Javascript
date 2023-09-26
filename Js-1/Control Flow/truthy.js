const userEmail="y@gmail.com"
if(userEmail){
    console.log("GOt Useremail");
}
else{
    console.log("Dont have an email");
}

//falsy values->false,0, -0,BigInt 0n,"",null,undefined,NaN
//execpt above falsy values other are tuthy
//truty values->some exaples ->"0","false"," ",[],{},function(){}

// const array=[]
// if (array.length===0){
//     console.log("empty array");
// }

const emptyObj={}

if (Object.keys(emptyObj).length===0){
    console.log("empty Object ");
}

//Nullish Coalescing operator(??):null undefined


let val1;
// val1=5??10;//to check null or undefined
// console.log(val1);

// 

// val1=undefined??10
// console.log(val1);


val1=undefined??10??20//whichever first it is gettinhg
console.log(val1);


//Ternary Operator

// condition ? true:false

const iceTeaPrice=100

iceTeaPrice <=80 ? console.log("Less than 80"):console.log("More than 80")

