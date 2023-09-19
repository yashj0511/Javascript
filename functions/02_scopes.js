
// var c=300


//{}//scope
let a=300
if(true){
    let a=10
    const b=20
    console.log("Inner a ",a);
    // var c=30
}



// console.log(a);
// console.log(b);
console.log("Outer a: ",a);


//when we run on browser when we run on node means here there is difference in scope


function one(){
    const username="Yash"
    function two()
    {
        const website ="YouTube"
        console.log(username);
    }
    //console.log(website);
    two()
    
}
one()

if (true){
    const userName="Yash"
    if(true){
        if (userName=="Yash"){
            const website =" youtube"
            console.log(userName+website);
        }
    }
    // console.log(website);

}
// console.log(userName);


//***********Intersting***** */
console.log(AddOne(5));
function AddOne(num){
    return num+1;

}

// console.log(addtwo(5));//gives error 
const addtwo=function(num){
    return num+2;
}//function which is also called expressions
