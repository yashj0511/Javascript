const score=400
console.log(score);

const balance = new Number(100) 
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber=12.898890

console.log(otherNumber.toPrecision(3));

const hundreads=1000000
console.log(hundreads.toLocaleString());
console.log(hundreads.toLocaleString('en-IN'));

const maxnum=Number.MAX_VALUE
console.log(maxnum);




//**********Maths*********** */


console.log(Math);
console.log(Math.abs(-40));
console.log(Math.round(4.6));

console.log(Math.ceil(4.2));
console.log(Math.floor(4.8));

console.log(Math.max(1,5,70,45));
console.log((Math.random()*10) +1 );//Math.random(0 to 1)
console.log(Math.floor((Math.random()*10) +1 ));
const min=10;
const max=20;

console.log(Math.floor(Math.random()*(max-min + 1)+min));// 

