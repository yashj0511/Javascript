const blocks=document.querySelectorAll('.color')
console.log(blocks);
const body=document.querySelector('body')
blocks.forEach((b)=>{
b.addEventListener("click",(e)=>{
body.style.backgroundColor=e.target.id;
})
})