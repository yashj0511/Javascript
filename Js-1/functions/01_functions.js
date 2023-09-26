function sayMyName(){
    console.log("YASH");
}//fuction defimtaion



//sayMyName();//reference 


// function addTwoNumbers(number1,number2){
//     console.log( number1+number2);
   
// }

// addTwoNumbers(2,3);
// addTwoNumbers(2,"3");
// addTwoNumbers(2,"a");



function addTwoNumbers(number1,number2){
   
   return number1+number2;
   console.log("YAsh");//unreachable
   
}
const res=addTwoNumbers(8,9);
console.log("res: ",res);

// console.log(addTwoNumbers(5,8));

function loginUserMessege(username){
//     if(username===undefined)
//     {
// console.log("Plese enter a username");
// return;
//     }
    if(!username)//it will check if username is undefined so if it is then undefined return false always so the if block executes as we using not in beginning means this code is equivalant to above if snippet just this is porfessional  
    {
console.log("Plese enter a username");
return;
    }
return `${username} just logged in`

}
console.log(loginUserMessege("YAsh"));
console.log(loginUserMessege());//will give undefined 

//passing default value to parameter can also solve this like 
//function loginUserMessege(username="Yash") means here if block will never execute becuase always be defined 



//... here in this xase is rest operator not spread 
function calculateCartPrice(val1,val2,...num1){
return num1;
}

// console.log(calculateCartPrice(2));

console.log(calculateCartPrice(2,3,4));
console.log(calculateCartPrice(2,3,4,5));

const user={
    username:"yash",
    price:545
}

function handleUser(anyobject)
{
    console.log(` username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleUser(user)
handleUser({
    username:"Zoro",
    price:555
})
const myNewArray=[100,2000,3000]

function returnSecondvalue(getarray){
    return getarray[2];
}
console.log(returnSecondvalue(myNewArray));

console.log(returnSecondvalue([15,545,5454,448]));