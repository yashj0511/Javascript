const myObj={
    js:"javascript",
    cpp:'cpp',
    rb:"ruby",
    swift:"switch by apple"
}

for (const key in myObj) {
console.log(`${key} shortcut for ${myObj[key]} `);
}

const programming=["js","cpp","java"]
for (const key in programming) 
{
 console.log(programming[key]);

}


const map=new Map()
map.set('IN',"INDIA")
map.set('USA',"United State of America")
map.set("Fr","France")

//map not iterable
for (const [key,value] of map) 
{
    console.log(`${key} : ${value}`);  
}

