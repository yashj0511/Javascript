let myDate= new Date()

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toJSON())

// console.log(typeof myDate);//object

// let myCreatedDate=new Date(2023,0,23)
// console.log(myCreatedDate.toDateString());

 
// let myCreatedDate=new Date("2023-01-14")//yyyymmdd
// console.log(myCreatedDate.toLocaleString());

let myCreatedDate2=new Date("01-22-2002")//ddmmyyyy
console.log(myCreatedDate2.toLocaleString());


let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate2.getTime());//will get you the value of time from which javascript started counting till the date you provided now you can compare the timestamps


console.log("Output of Date.now",Math.floor(Date.now()/1000));

let NewDate=new Date()
console.log(NewDate.getDate());
console.log(NewDate.getDay());
console.log(NewDate.getMonth()+1);

NewDate.toLocaleString('default',{
    weekday:"long",
})