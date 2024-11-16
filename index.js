let firstCard = 10;
let secondCard = 4;
let sum = firstCard + secondCard;
let message = " ";

let cards = [];
let hasBlackjack = false;
let isAlive = true;

let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

function renderGame() {
    // Render cards and sum
    cardsEl.textContent = "Cards: ";
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }
    
    sumEl.textContent = "Sum: " + sum;

    // Update message based on sum
    if (sum < 21) {
        messageEl.textContent = "Do you want to draw a new card? 🙂";
        document.getElementById("player-el").textContent = "Player: Is Alive"
    } else if (sum === 21) {
        messageEl.textContent = "Wohoo! You've got Blackjack! 🥳";
        hasBlackjack = true;
        document.getElementById("player-el").textContent = "Player: Is Alive"
    } else {
        messageEl.textContent = "You're out of the game! 😭";
        isAlive = false;
        document.getElementById("player-el").textContent = "Player: Is Not alive"
    }
}

function newCard() {
    if (isAlive && !hasBlackjack) {
        let card = getRandomCard();
        sum += card;
        cards.push(card);
        console.log(cards);
        renderGame();
    }
}

function startGame() {
    // Reset all variables
    isAlive = true;
    hasBlackjack = false;
    sum = 0;
    cards = [];

    // Draw initial two cards
    firstCard = getRandomCard();
    secondCard = getRandomCard();
    cards.push(firstCard, secondCard);
    sum = firstCard + secondCard;

    renderGame();
}

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1;
    if (randomNumber === 1) {
        return 11;
    } else if (randomNumber > 10) {
        return 10;
    } else {
        return randomNumber;
    }
}
