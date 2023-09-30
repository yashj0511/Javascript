class User{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`Usernme is ${this.username} `);
    }
}

class Teacher extends User{
    constructor(username,email,password)
    {
        super(username)
        this.email=email
        this.password=password

    }

    addCourse(){
        console.log(`new course was added by ${this.username} `);
    }
}

const chai=new Teacher("chai","chai@gmail","123")

chai.addCourse()
chai.logMe()

const tea=new User("masalachai")

tea.logMe()

console.log(chai === tea);
console.log(chai === Teacher);
console.log(chai instanceof Teacher);
