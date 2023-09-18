//Primitives

//7 types : String ,Number,Boolean,null,undefined,Symbol,BigInt


const score=100
const scoreValue=100.3

const isLoggedIn=false
const outsideTemp=null
//const userEmail; cannt keep const undefined

let userEmail;
const id=Symbol('123')
const anotherId=Symbol('123')

console.log(id===anotherId);


//Reference (Non primitive)

//Array,Objects,Functions

const heros=["shaktiman","naagraj","doga"];

let myObj={
    name: "Yash",
    age:22, 
}

console.log(myObj);

const myFunction=function(){
    console.log("Hello World");
}


// ********Memory*****//

// Stack (Primitive ), Heap (Non primitive )

//stack used->copoyy milta 
//Heap used->reference milta

let myChannelName="CoderYash"

let anotherName=myChannelName

myChannelName="YashCoder"

console.log(anotherName);


let UserOne={
    email:"user@gmail.com",
    upi:"userybl"
}

let UserTwo=UserOne;

UserTwo.email="jaware@gmail.com";

console.log(UserOne.email);

console.log(UserTwo.email);