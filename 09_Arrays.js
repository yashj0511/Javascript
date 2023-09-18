const marvelHeros=["Thor","IronMan","SpiderMan"]
const dc=["Superman","flash","batman"]

// marvelHeros.push(dc) //pushes on current array
// console.log(marvelHeros[3][1]);

// allheros=marvelHeros.concat(dc) //returns a new array
// console.log(allheros);

const all_new_heros=[...marvelHeros,...dc]
console.log(all_new_heros);

const anotherArray=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array=anotherArray.flat(Infinity)
console.log(real_another_array);


console.log(Array.isArray("yash"));
console.log(Array.from("Yash"));

console.log(Array.from({name:"Yash",age:22}));//interesting 

const score1=100
const score2=200
const score3=300
console.log(Array.of(score1,score2,score3));




