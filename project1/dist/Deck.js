"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Deck = exports.Card = void 0;
exports.shuffledeck = shuffledeck;
const BlackJackMain_1 = require("./BlackJackMain");
class Card {
    constructor(name, value, Ace) {
        this.name = name;
        this.value = value;
        this.Ace = Ace;
        //Ace variable used to flag if there needs to be special care when counting card values
    }
    //function for aces'. Triggers when ace is in play to change counts
    ace_flag(object) {
        if (object.Ace == true) {
            BlackJackMain_1.currentPlayer.ace = true;
        }
    }
}
exports.Card = Card;
//Aces
const AceS = new Card("Ace of Spades", 11, true);
const AceH = new Card("Ace of Hearts", 11, true);
const AceC = new Card("Ace of Clubs", 11, true);
const AceD = new Card("Ace of Diamonds", 11, true);
//Deck init
const Deck = new Array(AceS);
exports.Deck = Deck;
Deck.push(AceH);
Deck.push(AceC);
Deck.push(AceD);
//Setup vars
let ofS = " of Spades";
let ofH = " of Hearts";
let ofC = " of Clubs";
let ofD = " of Diamonds";
let count = 2;
//2 through 10 card loop
while (count < 11) {
    let temp = count.toString();
    const tempCard1 = new Card(temp + ofS, count, false);
    const tempCard2 = new Card(temp + ofH, count, false);
    const tempCard3 = new Card(temp + ofC, count, false);
    const tempCard4 = new Card(temp + ofD, count, false);
    Deck.push(tempCard1);
    Deck.push(tempCard2);
    Deck.push(tempCard3);
    Deck.push(tempCard4);
    count++;
}
//more setup vars
let J = "Joker";
let Q = "Queen";
let K = "King";
//Jokers, Queens, Kings 
var tempCard = new Card(J + ofS, 10, false);
Deck.push(tempCard);
tempCard = new Card(J + ofH, 10, false);
Deck.push(tempCard);
tempCard = new Card(J + ofC, 10, false);
Deck.push(tempCard);
tempCard = new Card(J + ofD, 10, false);
Deck.push(tempCard);
tempCard = new Card(Q + ofS, 10, false);
Deck.push(tempCard);
tempCard = new Card(Q + ofH, 10, false);
Deck.push(tempCard);
tempCard = new Card(Q + ofC, 10, false);
Deck.push(tempCard);
tempCard = new Card(Q + ofD, 10, false);
Deck.push(tempCard);
tempCard = new Card(K + ofS, 10, false);
Deck.push(tempCard);
tempCard = new Card(K + ofH, 10, false);
Deck.push(tempCard);
tempCard = new Card(K + ofC, 10, false);
Deck.push(tempCard);
tempCard = new Card(K + ofD, 10, false);
Deck.push(tempCard);
//Check
//console.log(Deck);
//Random num gen using Math.random()
//https://shinyu.org/en/typescript/numbers/generating-random-numbers/ source for function
function randomnum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
//check 2
/*for (let i = 51; i > -1; i--) {
    console.log(Deck[i])
}*/
//shuffle function
//exports to main file
//Doesn't return the deck, just a indicator string
//https://www.freecodecamp.org/news/how-to-shuffle-an-array-of-items-using-javascript-or-typescript/ source for shuffle function
function shuffledeck() {
    for (let i = Deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [Deck[i], Deck[j]] = [Deck[j], Deck[i]];
    }
    return "Shuffling Deck.......";
}
