class User{
    constructor(username){
        this.username=username
    }

    logMe(){
        console.log(`Username : ${this.username}`);
    }

    static createID(){
        return `123`
    }//static will not allow all the objects intanciated with the class user to acess this method createID

}


class Teacher extends User{
    constructor(username,email)
    {
        super(username)
        this.email=email
    }

}


const yash=new User("Yash")
// console.log(yash.createID());//not acessible 

const iphone=new Teacher("iphone","i@phone.com")

iphone.logMe()
// console.log(iphone.createID());//not acessible


//static methods are bound to class not to instnces

// console.log(User.createID());//runs because using class
