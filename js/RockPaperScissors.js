const restartBtn = document.getElementById('restartButton')
const playBtn = document.getElementById('playButton')
const paperInput = document.getElementById('playerPaper')
const rockInput = document.getElementById('playerRock')
const scissorsInput = document.getElementById('playerScissors')

const paperInputEnemy = document.getElementById('enemyPaper')
const rockInputEnemy = document.getElementById('enemyRock')
const scissorsInputEnemy = document.getElementById('enemyScissors')


const loseImg = document.getElementById("loseImg")
const winImg = document.getElementById("winImg")
const tieImg = document.getElementById("tieImg")
const img = document.getElementsByClassName("image")

let playerChoice
let enemyChoice 
let options = ["Rock","Paper","Scissors"]
let winner




function start(){
    const playBtn = document.getElementById('playButton')
    const paperInput = document.getElementById('playerPaper')
    const rockInput = document.getElementById('playerRock')
    const scissorsInput = document.getElementById('playerScissors')



    paperInput.addEventListener('click', inputChecked)
    rockInput.addEventListener('click', inputChecked)
    scissorsInput.addEventListener('click', inputChecked)
    playBtn.addEventListener('click', play)


}

function play(){
    let max = 3
    let min = 1
    enemyChoice = options[Math.floor(Math.random() * (max - min + 1) + min)-1]
    tieImg.style.display = 'none'
    loseImg.style.display = 'none'
    winImg.style.display = 'none'
    if(playerChoice === enemyChoice){
        winner = "it´s a draw"
        tieImg.style.display = 'block'
        checkEnemyInput()
    }else if(playerChoice === "Rock" && enemyChoice === "Scissors"){
        winner =  "Win!"
        winImg.style.display = 'block'
        checkEnemyInput()

    }else if(playerChoice === "Rock" && enemyChoice === "Paper"){
        winner =  "You lose!"
        loseImg.style.display = 'block'
        checkEnemyInput()

    }else if(playerChoice === "Paper" && enemyChoice === "Scissors"){
        winner =  "You lose!"
        loseImg.style.display = 'block'
        checkEnemyInput()

    }else if(playerChoice === "Paper" && enemyChoice === "Rock"){
        winner =  "Win!"
        winImg.style.display = 'block'
        checkEnemyInput()

    }else if(playerChoice === "Scissors" && enemyChoice === "Rock"){
        winner =  "You lose!"
        loseImg.style.display = 'block'
        checkEnemyInput()

    }else if(playerChoice === "Scissors" && enemyChoice === "Paper"){
        winner =  "Win!"
        winImg.style.display = 'block'
        checkEnemyInput()
    }else{
        winner = "no has seleccionado nada"
    }

    alert(winner)
}

function checkEnemyInput(){
    switch (enemyChoice) {
        case "Rock":
            rockInputEnemy.checked = true
            break;
        case "Paper":
            paperInputEnemy.checked = true
            break;
        case "Scissors":
            scissorsInputEnemy.checked = true
            break;
    }
}


function inputChecked(){

    
    if(rockInput.checked){
        playerChoice = rockInput.value
    }else if(paperInput.checked){
        playerChoice = paperInput.value
    }else if(scissorsInput.checked){
        playerChoice = scissorsInput.value
    }
}


window.addEventListener('load', start)