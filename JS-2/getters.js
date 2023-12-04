class User{
    constructor(email,password){
        this.email=email,
        this.password=password
    }
    get password(){
return this._password.toLowerCase()//value is displayed to the people who wants to see it but actually value storedd may not be the value they are seeing //here actual value is ABC but we are showing abc

    }  
    //if getter is there then setter must be there otherwise error

set password(value){
    this._password=value.toUpperCase()//value is store as uppercase 
}
//name should be same for getters or setters as the property

get email(){
    return this.email=this._email.toUpperCase()
}

set email(value){
     this._email=value
}


}

const yash=new User("yash@gmail.com","abc")
console.log(yash.password);
console.log(yash.email);


//get controls how to display it outside or like what should be value if we want to acess perticular property
