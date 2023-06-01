let firstCard = 11
let secondCard = 10
let sum = firstCard + secondCard
let message = document.querySelector("#message")
let cards = document.querySelector("#cards")
let total = document.querySelector("#sum")
let wins = document.querySelector("#wins")

let allCards = [firstCard, secondCard]

let hasBlackJack = false 
let isAlive = false 

let score = 1

function startGame(){
    renderGame()
}

function renderGame(){
    total.textContent = "Sum: " + sum
    wins.textContent = "Wins: " + score
    cards.textContent = "Cards: " + allCards[0] + " - " + allCards[1]
    if (sum <= 20){
        message.textContent = "Do you want to draw another card?"
    } else if (sum === 21) {
        message.textContent = "You've got Blackjack!"
        hasBlackJack = true
        score += 1
    } else {
        message.textContent = "You're out of the game!"
        isAlive = false
    }  
}

function newCard(){
    message.textContent = "This literally doesn't work yet lol"
    let thirdCard = 4
    sum += thirdCard
    renderGame()
}

