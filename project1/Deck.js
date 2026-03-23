"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Deck = exports.Card = void 0;
exports.shuffledeck = shuffledeck;
var BlackJackMain_1 = require("./BlackJackMain");
var Card = /** @class */ (function () {
    function Card(name, value, Ace) {
        this.name = name;
        this.value = value;
        this.Ace = Ace;
        //Ace variable used to flag if there needs to be special care when counting card values
    }
    //function for aces'. Triggers when ace is in play to change counts
    Card.prototype.ace_flag = function (object) {
        if (object.Ace == true) {
            BlackJackMain_1.currentPlayer.ace = true;
        }
    };
    return Card;
}());
exports.Card = Card;
//Aces
var AceS = new Card("Ace of Spades", 11, true);
var AceH = new Card("Ace of Hearts", 11, true);
var AceC = new Card("Ace of Clubs", 11, true);
var AceD = new Card("Ace of Diamonds", 11, true);
//Deck init
var Deck = new Array(AceS);
exports.Deck = Deck;
Deck.push(AceH);
Deck.push(AceC);
Deck.push(AceD);
//Setup vars
var ofS = " of Spades";
var ofH = " of Hearts";
var ofC = " of Clubs";
var ofD = " of Diamonds";
var count = 2;
//2 through 10 card loop
while (count < 11) {
    var temp = count.toString();
    var tempCard1 = new Card(temp + ofS, count, false);
    var tempCard2 = new Card(temp + ofH, count, false);
    var tempCard3 = new Card(temp + ofC, count, false);
    var tempCard4 = new Card(temp + ofD, count, false);
    Deck.push(tempCard1);
    Deck.push(tempCard2);
    Deck.push(tempCard3);
    Deck.push(tempCard4);
    count++;
}
//more setup vars
var J = "Joker";
var Q = "Queen";
var K = "King";
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
    var _a;
    for (var i = Deck.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        _a = [Deck[j], Deck[i]], Deck[i] = _a[0], Deck[j] = _a[1];
    }
    return "Shuffling Deck.......";
}
