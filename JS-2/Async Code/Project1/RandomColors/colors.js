const start=document.getElementById('start')
const stop=document.getElementById('stop')


const randColor=function()
{
    const hex="0123456789ABCDEF"
    let color="#"
    for(let i=0;i<6;i++){
         color+=hex[Math.floor(Math.random()*16)]
    }
    return color
}
let IntervalID
const changecolor=function()
{
    if(!IntervalID){
        IntervalID=setInterval(changeBgColor,1000)
    }

function changeBgColor()
{
    document.querySelector('.box1').style.backgroundColor=randColor();
}

}


const stopchangecolor=function(){
clearInterval(IntervalID)
IntervalID=null

}

start.addEventListener('click',changecolor)


stop.addEventListener('click',stopchangecolor)