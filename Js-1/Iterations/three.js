//for of

const arr=[1,2,3,4,5]

for (const num of arr) 
{
 console.log(num);   
}


const greetings="hello World !"

for (const greet of greetings) 
{ 
    console.log("Each char is ",greet);
}

//Maps

const map=new Map()
map.set('IN',"INDIA")
map.set('USA',"United State of America")
map.set("Fr","France")


console.log(map);

for (const [key,value] of map) {
    console.log(key," : ",value);
}

const myObj={
    GameOne:"NFS",
    "Game2":"Spiderman"
}

// for (const [key,val] of myObj) {
//     console.log(key,val);
// }//not iterable

