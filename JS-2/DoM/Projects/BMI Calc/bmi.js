const form=document.querySelector('form')
//This will give you empty values 
// const height=parseInt(document.querySelector('#height').value)
// const weight=parseInt(document.querySelector('#weight').value)
form.addEventListener('submit',function(e)
{
   e.preventDefault()
//we arre taking values here becuase as soon as we click on submit of form we will get this values from the fields
   const height=parseInt(document.querySelector('#height').value)
   const weight=parseInt(document.querySelector('#weight').value)
   const res=document.querySelector('#res')

   if(height === '' || height<0 || isNaN(height)){
      res.innerHTML=`Please give vallid input ${height}`
   }

   else if(weight === '' || weight<0 || isNaN(weight))
   {
      res.innerHTML=`Please give vallid input${weight}`
   }
   else 
   {
       const bmi=(weight/((height*height)/10000)).toFixed(2)
       //show reasult
       let messege=""
       if(bmi<20){
         messege=" Underweight "
       }
       else if(bmi>40){
         messege=" overweight "
       }
       else{
         messege = " overweight "
       }
       res.innerHTML=`<span>${bmi} ${messege}</span>`

       
       
   }

})