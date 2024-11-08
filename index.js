// Build a BlackJack Game

// variables representing two cards 
let firstCard = 10
let secondCard = 4

//challenge #1
//create a new variable and set it to the sum of the two cards 
let result = firstCard + secondCard;

//chalenge #2 
// code the statements below based on the conditions shown in blackjack.png from the images folder
// your output should work in the browser's console based on changing the values assigned to the cards

//starter code
let message;
if(result < 21){
    message = "Do you want to draw a new card? 🙂"
}
if(result === 21){
    message = "Wohoo! You've got Blackjack! 🥳"
}
if(result > 21){
    message = "You're out of the game! 😭"
}
console.log(message)
