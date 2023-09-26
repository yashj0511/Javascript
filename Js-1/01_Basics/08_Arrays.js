//Arrays

const myArr = [0,1,2,3,4,5,true,"Yash"]//mix datatype possible
//you can add element in array at any time 

console.log(myArr);

//array copy give shallow copy means smae refrence point shared

const myHeros=["Shaktiman","naagraj"]
console.log("type of myHeros",typeof myHeros)
const myArray2=new Array(1,2,3,4)
console.log(myArray2[0]);

//Array mmethods

// myArr.push(6)//insert at end
// myArr.push(7)
// myArr.pop()//delete at end
// console.log(myArr);
myArr.unshift(9)//insert at front 
myArr.shift()//remove from front
// console.log(myArr);//in this case we have shift all values so that we can insert at first position

console.log(myArr.includes(4));
console.log(myArr.indexOf('Yash'));
console.log(myArr.indexOf(-8));

const newArr=myArr.join()
console.log("newArr",newArr);
console.log(typeof newArr);

//slice , splice 

console.log("A ",myArr); 
const myn1=myArr.slice(1,3)//does not manupulate original array and does not include last index means 1,2 that's it 3 not included

console.log(myn1);
console.log(" B ",myArr);

const myn2=myArr.splice(1,3)
console.log(" C ",myArr);//splice manupulated original array and also included the end index of eange


console.log(myn2);

