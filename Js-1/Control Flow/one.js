//if 

const isUserLoggedIn=true
if (isUserLoggedIn){
console.log("Logged In");
}

if(2=="2"){
    console.log(`executed 2== "2"`);
}

if(2==="2"){
    console.log(`executed 2==="2"`);
}//datatype also important 


// const temprature=41


// if(temprature<50)
// {
//     console.log("less than 50");
// }
// else{
//     console.log("greter than 50");
// }
// console.log("executed");


// const score=200

// if(score>100){
//     const power="fly"
//     console.log(` User Power ${power} `);
// }
// console.log(` User Power ${power} `);

// const balance=1000
// if(balance>500)console.log("test");//single line executes 

// if(balance < 500){
//     console.log("Less than 500");
// }

// else if( balance<750){
//     console.log("Less tham 750");
// }

// else if( balance<900){
//     console.log("Less tham 900");
// }
// else{
//     console.log("Less than 1200");
// }

const userLoggedIn=true
const debitCard=true
const LoggedInFromGoogle=false
LoggedInFromEmail=true
if(userLoggedIn && debitCard ){
    console.log("Allow to but course");
}
if(LoggedInFromGoogle || LoggedInFromEmail ){
    console.log("Logged In");
}