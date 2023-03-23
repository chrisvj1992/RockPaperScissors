const userChoiceDisplay = document.createElement('h1')
const computerChoiceDisplay = document.createElement('h1')
const resultDisplay = document.createElement('h1')
const gameGrid = document.getElementById('game')
const playButton = document.createElement('button')
const restartButton = document.createElement('button')
const timerDisplay = document.getElementById('timer');

gameGrid.append(userChoiceDisplay,computerChoiceDisplay,resultDisplay,playButton, restartButton)

const choices = ['rock', 'paper', 'scissors']
let userChoice
let computerChoice
let timerInterval
let timeLeft = 10

const handleClick = (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = 'User choice ' + userChoice
    generateComputerChoice()
    getResult()
    clearInterval(timerInterval);
}

const generateComputerChoice = () => {
    //math.floor lo utilizo para que el valor valla de 0 a 2
    const randomChoice = choices[Math.floor(Math.random() * choices.length)]
    computerChoice = randomChoice
    computerChoiceDisplay.innerHTML = 'Pc choice ' + computerChoice
                        
}

for(let i = 0; i < choices.length; i++)
    {
        const button = document.createElement('button')
        button.id = choices[i]  // 
        button.className = 'choiceButton'
        button.innerHTML = choices[i]
        button.addEventListener('click', handleClick)
        button.disabled = true
        gameGrid.appendChild(button)
    }

    playButton.innerHTML = "Play"
    restartButton.innerHTML = "Restart"

const getResult = () => {
    switch(userChoice + computerChoice){
        case 'scissorspaper':
        case 'rockscissors':
        case 'paperrock':
            resultDisplay.innerHTML = "You Win!"
            break

        case 'paperscissors':
        case 'scissorsrock':
        case 'rockpaper':
            resultDisplay.innerHTML = "You Lose!"
            break
            
        case 'paperpaper':
        case 'scissorsscissors':
        case 'rockrock':
            resultDisplay.innerHTML = "It´s a Draw"
            break

        default: 
            resultDisplay.innerHTML = "You Lose"
            break
    }
}

playButton.addEventListener('click', () =>{
    let  buttonsChoice = document.getElementsByClassName('choiceButton')
    for (let i = 0; i < buttonsChoice.length; i++) {
        buttonsChoice[i].disabled = false
    }

    timerInterval = setInterval(updateTimer, 1000);
})

restartButton.addEventListener('click', () =>{
    const  buttonsChoice = document.getElementsByClassName('choiceButton')
    computerChoiceDisplay.innerHTML = ""
    resultDisplay.innerHTML = ""  
    userChoiceDisplay.innerHTML = ""  

    Array.from(buttonsChoice).forEach(e => {
        e.disabled = true
    })

    
    timeLeft = 10;
    timerDisplay.innerText = "time:"+ timeLeft;
    clearInterval(timerInterval);
})

const updateTimer = () => {
    timeLeft--
    timerDisplay.innerHTML = "time:"+ timeLeft

    if (timeLeft === 0) {
        clearInterval(timerInterval);
        generateComputerChoice()
        getResult()
      }
}