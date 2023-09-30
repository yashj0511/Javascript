//ES6

// class User{
//     constructor(username,email,password)
//     {
//         this.username=username
//         this.email=email
//         this.password=password
//     }

//     encryptpassword()
//     {
//         return `${this.password}abc`
//     }
//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }


// }

// const a=new User("chaii","chai@gmail.com","123")

// console.log(a.encryptpassword());
// console.log(a.changeUsername());


//behind the schene

function User(username,password,email){
    this.username=username
    this.email=email
    this.password=password

}
User.prototype.encryptpassword=function(){
    return `${this.password}abc`
}

User.prototype.changeUsername=function(){
    return `${this.username.toUpperCase()}`
}

const tea=new User("tea","tea@gmail.com","123")
console.log(tea.encryptpassword());
console.log(tea.changeUsername());