





setInterval(function(){
    const clock=document.getElementById('date')
    let date= new Date().toLocaleTimeString()
    clock.innerText=`${date}`
},1000)