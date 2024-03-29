let sum = 0
let message = document.querySelector("#message")
let cards = document.querySelector("#cards")
let total = document.querySelector("#sum")
let wins = document.querySelector("#wins")


let allCards = [ ]

let hasBlackJack = false 
let isAlive = false 

let playerName = "Your Mom"
let playerChips = 145

let player = document.querySelector("#player")
player.textContent = playerName + ": $" + playerChips

function getRandomCard(){
    let cardRandom = Math.floor(Math.random() * 13) + 1
    if (cardRandom > 10){
        return 10
    } else if (cardRandom === 1) {
        return 11
    } else {
        return cardRandom
    }
    
} 

function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    sum = firstCard + secondCard
    allCards = [firstCard, secondCard]
    renderGame()
}

function renderGame(){
    cards.textContent = "Cards: "
        for (let c = 0; c < allCards.length; c++) {
            cards.textContent += allCards[c] + " "
        }

    total.textContent = "Sum: " + sum
    if (sum <= 20){
        message.textContent = "Do you want to draw another card?"
    } else if (sum === 21) {
        message.textContent = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message.textContent = "You're out of the game!"
        isAlive = false
    }  
}

function newCard(){
    if (isAlive === true && hasBlackJack === false ){
    let thirdCard = getRandomCard()
    allCards.push(thirdCard)
    sum = sum + thirdCard
    renderGame()
    }
}

