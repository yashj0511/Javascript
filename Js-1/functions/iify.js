//Immedietly Invoked Function Expressions (IIFE)
//avoifd pollution from global scope we use iify 


//named IIfy  
(function chai(){
    console.log("DBConnected");
})();//this semicolan if you remove will give you an error



//simple iify 
((name)=>
{
console.log(`Db ${name}`);
}
)("Yash")