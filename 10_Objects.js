//singleton

//Object.create()//contructoir menthod isse singleton bnta 
//Contructor se bnega to singleton  bnega
//Liters ki tarike se singleton nhi banata hai



//*****Object Literals*********** */

const mySym=Symbol("key1")

const JsUser={
name:"Yash",
// mySym:"myKey1", // it will betrated as string
 [mySym]:"myKey1", //now it will be treated as symbol 
age:22,
"full name":"Yash Jaware",
location:"Pune",
email:"ycjaware@gmail.com",
isLoggedIn:true,
lastLoginDays:["Monday","Saturday"]

}


console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
// console.log(JsUser.mySym,typeof JsUser.mySym);//type is string but we wnted symbol

console.log(JsUser[mySym]);//its symbol and it is acess like this 

JsUser.email="ycjaware@mitaoe.ac.in  "

// Object.freeze(JsUser)

JsUser.email='yash@google.com';

console.log(JsUser);


JsUser.greetings=function ()
{
    console.log("hello JS USer");
}

JsUser.greetingTwo=function ()
{
    console.log(`hello JS USer ${this.name}`);
}
console.log(JsUser.greetings);
console.log(JsUser.greetings());
console.log(JsUser.greetingTwo());



  

