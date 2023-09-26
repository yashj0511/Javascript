 
 
 
 const user={
    username:"Yash",
    price:5454,
    welcomeMessege:function()
    {
        console.log(`${this.username} ,welcom to webisite `);//refer current context
        console.log(this);
    }
 }

//  user.welcomeMessege()
//  user.username="sam"
//  user.welcomeMessege()
 
//console.log(this);//empty becuase no global context here but if you do it in browser then will see window and other things

//browsers global object is window object

// function chai(){
//     let username="Yash"
//     console.log(this.username);//undefined
// }
// chai()


// const chai=function(){
//     let username="Yash"
//   console.log(this.username);//undefined
// }

// chai()



// const chai=()=>{
//     let username="Yash"
//   console.log(this.username);//undefined
// }

// chai()


// const addTwo=(num1,num2)=>{
//     return num1+num2
// }
// console.log(addTwo(5,7));

//implicit return 
// const addTwo=(num1,num2)=>num1+num2
// const addTwo=(num1,num2)=>(num1+num2)//no need to write return in paranthesis in curly brace you have to write return 

const addTwo=(num1,num2)=>({username:"Yash"})
console.log(addTwo(5,7));


 


