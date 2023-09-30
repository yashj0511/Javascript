const promise1 = new Promise(function(resolve,reject){
    //Do a async tasks
    //DB calls, cryptographynetwork
    setTimeout(function () 
    {
        console.log('Async Task is completet ');
        resolve()//it is connected to .then
    },1000)
})

//promises are object representiing eventual completion or failure

//mtlab for exaple neta vada krte hai road bnva denge means in future aise krenge complete hoga ki nhi vo  to hame nhi pta mtlb ye hua promise bn gyi mtlb reolve ho gya nhi bna mtlb rejject ho gya

// .then is related to resolve

promise1.then(function(){
    console.log("Promise consumed ");
})


new Promise(function (resolve,reject) {
    setTimeout(function () {
        console.log("Async task 2")
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved ")
}
)


//in promise after all statements resolve will call and becaise of that 



const promise3=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"Yash",email:"example@gmail.com"})
    },1000)
})

promise3.then(function(user){
console.log(user);
})


const promise4=new Promise(function(resove,reject){
    setTimeout(function() {
    let error=true
    if(!error){
        resove({username:"yash",password:"123"})
    }
    else{
        reject('Error: Something went wrong')
    }
    },1000)
})

promise4.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(()=>{console.log("The promise is either reolve or rejected ");})



const promise5=new Promise(function(resolve,reject){
    setTimeout(function() {
        let error=true
        if(!error){
            resolve({username:"javascript",password:"123"})
        }
        else{
            reject('Error: JS went wrong')
        }
        },1000)
})



//.then -> for reolvve .catch->reject .finally->excutes for whatever the scenario is 

// it is not nessery you use .then and .catch for promise you can also use async await 

async function consumePromiseFive()
{
  try{
    const response= await promise5
    console.log(response);
  }
  catch(err){
    console.log(err);
  }
} 

consumePromiseFive()





// async function getAllUsers()
// {
    
//     try
//     {
//          const response=await fetch('https://api.github.com/users/yashj0511')//takes time
//         console.log(response); 
//         const data= await response.json()//takes time
//          console.log(data);
//          console.log("Hello");
//     }
//     catch(error)
//     {
//     console.log(" E ",error );
//     }
// }

// getAllUsers()



fetch('https://api.github.com/users/yashj0511').then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
})



