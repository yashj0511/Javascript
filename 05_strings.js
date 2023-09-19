// Little outdated
// const name = "Yash ";
//  const RepsosCount=50;

//  console.log(name+RepsosCount);

//new syntax
const name = "Yash ";
const RepsosCount=50;

 console.log(`Hello I am ${name} I have ${RepsosCount} on my GitHub `);

 const gameName=new String("PicPak");//with this we get length method indexing and other things

//  console.log(gameName[0]);
//  console.log(gameName.__proto__);
//  console.log(gameName.length);
//  console.log(gameName.toUpperCase());//direvtly acess proto properties

 console.log(gameName.charAt(2));
 console.log(gameName.indexOf('P'));

 const newString=gameName.substring(0,4);
 console.log(newString);

 const anotherString= gameName.slice(-6,5);//negative index allowed
 console.log("SLice Output ",anotherString);



 const newStringOne="     Yash         "
 console.log(newStringOne);
 console.log(newStringOne.trim());

const url="https://yash.com/yash%20jaware"
console.log(url.replace('%20','-'));

console.log(url.includes('yash'));
console.log(url.includes('picpak'));

const RandomName="Yash-Jaware"
console.log(RandomName.split("-"))



