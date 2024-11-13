let firstCard = 10
let secondCard = 4
let sum = firstCard + secondCard;
let message = " ";

if (sum < 21) {
    message = "Do you want to draw a new card? 🙂"
}
if (sum === 21) {
    message = "Wohoo! You've got Blackjack! 🥳"
}
if (sum > 21) {
    message = "You're out of the game! 😭"
}

console.log(message)

const cards = new Array();
let hasBlackjack = false;
let isAlive = true;
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

function renderGame() {
    if (sum < 21) {
        isAlive = true;
    } if (sum === 21) {
        hasBlackjack = true;
    } else {
        isAlive = false;
        hasBlackjack = false;
    }

    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i];
        sum += cards[i];
        sumEl.innerText = sum + " ";
    }
}

function newCard() {
    let card = getRandomCard();
    sum += card;
    sumEl = sum;
    cards.push(card);
    console.log(cards);
    renderGame();
}

function startGame() {
    isAlive = true;
    firstCard = getRandomCard();
    cardsEl += firstCard;
    secondCard = getRandomCard();
    cardsEl += secondCard;
    renderGame();
}

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 12 + 1);
    if (randomNumber === 1) {
        return 11;
    } else if (randomNumber > 9) {
        return 10;
    } else {
        return randomNumber;
    }
}