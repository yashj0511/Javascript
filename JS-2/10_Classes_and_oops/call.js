function Setusername(username){
    //complex DB calls
    this.username=username
    console.log("called");
}


function createUser(username,email,password)
{
     
    Setusername.call(this,username)//.call to hold the exexution context also passing current execution context //in this case you can give this that this is optional 

    //.call to hold that execution context refrence otherwise it will be popped out of the stack and all var will be deleted for setusername

    this.email=email
    this.password=password   
}

const chai = new createUser("chai","chai@fb.com","123")
console.log(chai);