"use strict";
//Game start
Object.defineProperty(exports, "__esModule", { value: true });
exports.currentPlayer = void 0;
var readline = require("readline-sync");
//used at begining of game
var Deck_1 = require("./Deck");
//used throughout game
var Deck_2 = require("./Deck");
//used throughout game
var Player_1 = require("./Player");
var Deck_3 = require("./Deck");
//testing card
var test = new Deck_3.Card("Test of Diamonds", 11, false);
//Arrays to hold cards
var Dealercards = [test];
var PCcards = [test];
//Player class objects
var Dealer = new Player_1.Player("Dealer", 0, false, Dealercards);
var PC = new Player_1.Player("Player", 0, false, PCcards);
//pointer
exports.currentPlayer = Dealer;
var player_win = false;
var dealer_win = false;
var dealer_flag = false;
//text vars
var dealermessage_1 = "Dealer deals a(n) ";
var and = " and one card face down ";
var dealer_score = "Their current score is ";
var player_dealt = "You are dealt a(n) ";
var pcand = " and a(n) ";
var player_score = "Your current score is ";
var player_cards3 = "You now have a(n) ";
var player_and2 = ", a(n) ";
function playtest() {
    if (exports.currentPlayer.ace == true) {
        if (exports.currentPlayer.score > 21) {
            exports.currentPlayer.score -= 10;
        }
    }
    if (exports.currentPlayer.score > 21) {
        console.log(exports.currentPlayer.name + " card value is over 21. That's a bust.");
        console.log(exports.currentPlayer + " Loses");
        if (exports.currentPlayer == Dealer) {
            player_win = true;
        }
        else
            dealer_win = true;
    }
    if (exports.currentPlayer.score == 21) {
        if (exports.currentPlayer == PC) {
            exports.currentPlayer = Dealer;
        }
        else
            (exports.currentPlayer = Dealer);
        if (exports.currentPlayer.score == 21) {
            console.log("Both players have a card value of 21");
            console.log("That's a tie");
            dealer_win = true;
        }
    }
    if (dealer_flag = true) {
        if (Dealer.score < 21 || PC.score < 21) {
            while (Dealer.score < 21 || PC.score < 21) {
                Dealer.score += 1;
                PC.score += 1;
            }
            if (Dealer.score == 21) {
                console.log("Dealer wins");
                dealer_win = true;
            }
            else if (PC.score == 21) {
                console.log("Player wins");
                player_win = true;
            }
        }
    }
}
//Main game body here
while (player_win = false || dealer_win == false) {
    //calls for shuffled deck, prints indicator string
    console.log((0, Deck_1.shuffledeck)());
    //top card 'drawn' before game starts
    var currentCard = Deck_2.Deck.pop();
    //setup on Dealer side
    //adds score, flags ace in Deck
    exports.currentPlayer.accounting(currentCard);
    currentCard.ace_flag(currentCard);
    //adds card to dealer array
    Dealercards[0] = currentCard;
    //prints message
    console.log(dealermessage_1 + currentCard.name + and);
    console.log(dealer_score + Dealer.score);
    //pop next card
    currentCard = Deck_2.Deck.pop();
    //add it to hand, do not announce 
    Dealercards.push(currentCard);
    //account for current card
    exports.currentPlayer.accounting(currentCard);
    currentCard.ace_flag(currentCard);
    //setup on Player side
    exports.currentPlayer = PC;
    //Player gets two cards
    currentCard = Deck_2.Deck.pop();
    exports.currentPlayer.accounting(currentCard);
    currentCard.ace_flag(currentCard);
    PCcards[0] = currentCard;
    currentCard = Deck_2.Deck.pop();
    exports.currentPlayer.accounting(currentCard);
    currentCard.ace_flag(currentCard);
    PCcards.push(currentCard);
    //print message
    console.log(player_dealt + PCcards[0].name + pcand + PCcards[1].name);
    console.log(player_score + PC.score);
    if (PC.score == 21) {
        console.log("Perfect Hand! You got Black Jack");
        console.log("Player Wins");
        break;
    }
    var move = readline.question("Would you like to (h)it or (s)tay?");
    if (move == "h") {
        currentCard = Deck_2.Deck.pop();
        exports.currentPlayer.accounting(currentCard);
        PCcards.push(currentCard);
        console.log(player_dealt + PCcards[2].name);
        console.log(player_cards3 + PCcards[0].name + player_and2 + PCcards[1].name + pcand + PCcards[2].name);
        console.log(player_score + PC.score);
        playtest();
        var move = readline.question("Would you like to (h)it or (s)tay?");
        if (move == "h") {
            currentCard = Deck_2.Deck.pop();
            exports.currentPlayer.accounting(currentCard);
            PCcards.push(currentCard);
            console.log(player_dealt + PCcards[2].name);
            console.log(player_cards3 + PCcards[0].name + player_and2 + PCcards[1].name + pcand + PCcards[2].name);
            console.log(player_score + PC.score);
            playtest();
            var move = readline.question("Would you like to (h)it or (s)tay?");
            if (move == "h") {
                currentCard = Deck_2.Deck.pop();
                exports.currentPlayer.accounting(currentCard);
                PCcards.push(currentCard);
                console.log(player_dealt + PCcards[2].name);
                console.log(player_cards3 + PCcards[0].name + player_and2 + PCcards[1].name + pcand + PCcards[2].name);
                console.log(player_score + PC.score);
                playtest();
                var move = readline.question("Would you like to (h)it or (s)tay?");
                if (move == "h") {
                    currentCard = Deck_2.Deck.pop();
                    exports.currentPlayer.accounting(currentCard);
                    PCcards.push(currentCard);
                    console.log(player_dealt + PCcards[2].name);
                    console.log(player_cards3 + PCcards[0].name + player_and2 + PCcards[1].name + pcand + PCcards[2].name);
                    console.log(player_score + PC.score);
                    playtest();
                }
            }
        }
    }
    else if (move == "s") {
        console.log("Dealer flips the face down card...");
        dealer_flag = true;
        Dealer.score += Dealercards[1].value;
        playtest();
    }
}
