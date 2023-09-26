let randNum=parseInt(Math.random()*100+1)

const form=document.querySelector('form')

const submit=document.querySelector('#subt')
const userInput=document.querySelector('#guessfield')



const guessSlots=document.querySelector('.guesses')

const Remaining=document.querySelector('.lastReasult')
const loworhi=document.querySelector('.lowOrhi')
const startover=document.querySelector('.reasult')

const p= document.createElement('p')

let prevGuess = []

let numguess=1

let playgame= true

if(playgame)
{
    submit.addEventListener('click',function(e){
        e.preventDefault()
        const guess=parseInt(userInput.value)
        console.log(guess);
        validateGuess(guess)

    })
}

function validateGuess(guess)
{
    if(isNaN(guess)){
        alert("please enter a valid number")
    }
    else if(guess<1){
        alert("please enter a  number greter than 1")
    }
    else if(guess>100){
        alert("please enter a  number less than 100")
    }
    else
    {
        prevGuess.push(guess)
        if(numguess === 11){
            displayGuess(guess)
            displayMessege(`Game Over Random number was ${randNum}`)
            endGame()
        }
        else{
            displayGuess(guess)
            checkGuess(guess)

        }
       
    }
}

function checkGuess(guess)
{
    if(guess===randNum){
        displayMessege(`You guessed it right`)
        endGame()
    }
    else if(guess<randNum){
        displayMessege(`Number is too low `)
    }
    else if(guess>randNum){
        displayMessege(`Number is too high `)
    }
}

function displayGuess(guess){
    //
    userInput.value=''
    guessSlots.innerHTML+=`${guess} `
    numguess++;
    Remaining.innerHTML=`${11-numguess}`

}


function displayMessege(messege){
    //
     loworhi.innerHTML=`<h3>${messege}</h3>`
}

function endGame()
{
    userInput.value=''
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML=`<h2 id="newgame">Start new game </h2>`
    startover.appendChild(p)
    playgame=false
    newGame()
}

function newGame()
{
const newGameButton=document.querySelector('#newgame')

newGameButton.addEventListener('click',function(e){
    randNum=parseInt(Math.random()*100+1)
    prevGuess=[]
    numguess=1
    guessSlots.innerHTML=''
    Remaining.innerHTML=`${11-numguess}`
    userInput.removeAttribute('disabled')
    startover.removeChild(p)
    playgame=true
})
}




