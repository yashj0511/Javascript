const user={
    username:"yash",
    logincount:8,
    signIn:true
}




console.log(user.username);


function User(username,logincount,isloggedin){
    this.myusername=username
    this.count=logincount
    this.isloggedin=isloggedin
    this.greetings=function(){
        console.log(`Welcome ${this.myusername}`);
    }
    return this //by deault it is the if yoy comment it no effect 
}
const User1=User("Yash",22,false)
const User2=User("S",22,false)//values overwrite ho gyi
console.log(User1);

console.log(User2);


const User3=new User("OP",22,false)
const User4=new User("Q",22,true)//values overwrite nhi hue because of new it is giving me new instance
console.log(User3);

console.log(User4);

// new->after using it new empty object get created 
//construction function called becuase of new

//this keyword ke andar inject ho jata hai

//given back to you


console.log(User4.constructor);