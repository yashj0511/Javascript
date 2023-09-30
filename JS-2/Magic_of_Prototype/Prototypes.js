// let myName="Yash          "
// console.log(myName.trulength);



let myHeros=["thor","spiderman"]

let heroPower={
    thor:"Hammer",
    spiderman:"sling",
    getspiderpower:function(){
        console.log(`Spidey power is ${this.spiderman} `);
    }
}

Object.prototype.yash=function()
{
    console.log(` Yash is present in all objects `);
}

heroPower.yash()
myHeros.yash()

Array.prototype.heyYash=function(){
    console.log(`Hello from Yash `);
}

myHeros.heyYash()
// heroPower.heyYash() //this gives error 


//inheritance 
const user={
    user:"chai",
    emai:'chai@google.com'
}
const teacher={
    makevideo:true
}
const TeachingSupport={
    isAvailable:false
}

const TASupport=
{
    nakeAssignment:'JS assignment',
    fulltime:true,
    __proto__:TeachingSupport//here after doing this we can acess the functionalities of Teachong support in TASupport this is prototypal inheritance 

}

teacher.__proto__=user//prototypal inheritance

//prototypes in all object and its decendants like array,string,function becuse these 3 are also objects but if you mmake prototype for array then it will be not shared in objects it will be available in arrays only

//function-----|
//array------->Object
//string------|
// TASupport.yash()


//*****Modern syntax */

Object.setPrototypeOf(TeachingSupport,teacher)//teachingsupport will acess all properties of teacher



//back to our 1st line challenge
let anotherusername="ChaiAurCode     "
String.prototype.truelength=function(){
    console.log(`${this}`);
    console.log(`true length is ${this.trim().length}`);
}

anotherusername.truelength()


"IceCream".truelength()