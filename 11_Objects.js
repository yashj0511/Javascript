// const tinderUser=new Object()//singleton object

const tinderUser={
} //non singleton

tinderUser.id="123abc"
tinderUser.name="sam"
tinderUser.isLoggedIn=false
 //console.log(tinderUser);

const regularUser={
    email:"ycjaware@gmail.com",
    fullname:
    {
        userFullname:{
            firstname:"Yash",
            lastname:"Jaware"
        },
        preferdname:
        {
            name:"Zoro",
            anime:"One Piece",
            myfullname:function()
            {
                return `My name is ${this.name} And I will find  ${this.anime} `;
            }

        }//second object you can use chainig as much as possible of objects 
    }

}


console.log(regularUser.fullname.userFullname.firstname);
console.log(regularUser.fullname.preferdname.myfullname());

const obj1={1:"a",2:"b"}
const obj2={2:"a",4:"b"}

//const obj3={obj1,obj2}//samecproblem like array here object ke andar object
//const obj3=Object.assign({},obj1,obj2)//using {} will ensure everytime gurentted reasult so good pratice to include it and also if we not include it then obje 1 will have all  the values

const obj3={...obj1,...obj2}

// console.log(obj3); 

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));

// console.log(Object.keys(tinderUser).length);
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));
// console.log(tinderUser.hasOwnProperty('isLoggedOut'));


const course={
    coursename:"js in hindi",
    price:"787",
    courseInstructor:"Yash"
}
//console.log(course.price);

const {courseInstructor}= course//extracting courseInstructor from course  object destructuring 

console.log("Destructure Object",courseInstructor);



 