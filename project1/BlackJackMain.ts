//Game start

import * as readline from 'readline-sync';

//used at begining of game
import { shuffledeck } from './Deck';

//used throughout game
import { Deck } from './Deck';

//used throughout game
import { Player } from './Player';


import { Card } from './Deck';
import { realpath } from 'fs';

//testing card
const test = new Card("Test of Diamonds", 11, false)

//Arrays to hold cards
let Dealercards = [test]
let PCcards = [test];

//Player class objects
let Dealer = new Player("Dealer", 0 , false, Dealercards);
let PC = new Player("Player", 0, false, PCcards);

//pointer
export let currentPlayer = Dealer;

let player_win = false;
let dealer_win = false;
let dealer_flag = false;

//text vars
let dealermessage_1 = "Dealer deals a(n) "
let and = " and one card face down "
let dealer_score = "Their current score is "
let player_dealt = "You are dealt a(n) "
let pcand = " and a(n) "
let player_score = "Your current score is "
let player_cards3 = "You now have a(n) "
let player_and2 = ", a(n) "


function playtest(){
    if (currentPlayer.ace == true) {
        if (currentPlayer.score > 21) {
            currentPlayer.score -= 10;
        }
    }
    if (currentPlayer.score > 21) {
        console.log(currentPlayer.name + " card value is over 21. That's a bust.")
        console.log( currentPlayer + " Loses")
        if (currentPlayer == Dealer){
            player_win = true;

        } else dealer_win = true;
    }
    if (currentPlayer.score == 21) {
        if (currentPlayer == PC) {
            currentPlayer = Dealer;
        } else (currentPlayer = Dealer);
        if(currentPlayer.score == 21){
            console.log("Both players have a card value of 21")
            console.log("That's a tie")
            dealer_win = true;
        }
    }
    if (dealer_flag = true) {
        if (Dealer.score < 21 || PC.score < 21 ){
            while ( Dealer.score < 21 || PC.score < 21 ) {
                Dealer.score += 1;
                PC.score += 1;
            }
            if (Dealer.score == 21){
                console.log("Dealer wins")
                dealer_win = true;
            } else if (PC.score == 21){
                console.log("Player wins")
                player_win = true;
            }
        }
    }
    
    
}

//Main game body here
while (player_win = false || dealer_win == false) {
    
    //calls for shuffled deck, prints indicator string
    console.log(shuffledeck());
    
    //top card 'drawn' before game starts
    let currentCard = Deck.pop() as Card;
    
    //setup on Dealer side
    //adds score, flags ace in Deck
    currentPlayer.accounting(currentCard);
    currentCard.ace_flag(currentCard);
    //adds card to dealer array
    Dealercards[0] = currentCard;
    //prints message
    console.log(dealermessage_1 + currentCard.name + and)
    console.log(dealer_score + Dealer.score);
    //pop next card
    currentCard = Deck.pop() as Card;
    //add it to hand, do not announce 
    Dealercards.push(currentCard);
    //account for current card
    currentPlayer.accounting(currentCard);
    currentCard.ace_flag(currentCard);
    
    //setup on Player side
    currentPlayer = PC;
    //Player gets two cards
    currentCard = Deck.pop() as Card;
    currentPlayer.accounting(currentCard);
    currentCard.ace_flag(currentCard);
    PCcards[0] = currentCard;

    currentCard = Deck.pop() as Card;
    currentPlayer.accounting(currentCard);
    currentCard.ace_flag(currentCard);
    PCcards.push(currentCard);

    //print message
    console.log(player_dealt + PCcards[0].name + pcand + PCcards[1].name);
    console.log(player_score + PC.score);

    if (PC.score == 21) {
        console.log("Perfect Hand! You got Black Jack")
        console.log("Player Wins")
        break
    }
    var move = readline.question("Would you like to (h)it or (s)tay?");
    if (move == "h"){
        currentCard = Deck.pop() as Card;
        currentPlayer.accounting(currentCard);
        PCcards.push(currentCard);
        console.log(player_dealt + PCcards[2].name);
        console.log(player_cards3 + PCcards[0].name + player_and2 + PCcards[1].name + pcand + PCcards[2].name);
        console.log(player_score + PC.score);
        playtest();
            var move = readline.question("Would you like to (h)it or (s)tay?");
        if (move == "h"){
            currentCard = Deck.pop() as Card;
            currentPlayer.accounting(currentCard);
            PCcards.push(currentCard);
            console.log(player_dealt + PCcards[2].name);
            console.log(player_cards3 + PCcards[0].name + player_and2 + PCcards[1].name + pcand + PCcards[2].name);
            console.log(player_score + PC.score);
            playtest();
                var move = readline.question("Would you like to (h)it or (s)tay?");
            if (move == "h"){
                currentCard = Deck.pop() as Card;
                currentPlayer.accounting(currentCard);
                PCcards.push(currentCard);
                console.log(player_dealt + PCcards[2].name);
                console.log(player_cards3 + PCcards[0].name + player_and2 + PCcards[1].name + pcand + PCcards[2].name);
                console.log(player_score + PC.score);
                playtest();
                    var move = readline.question("Would you like to (h)it or (s)tay?");
                if (move == "h"){
                    currentCard = Deck.pop() as Card;
                    currentPlayer.accounting(currentCard);
                    PCcards.push(currentCard);
                    console.log(player_dealt + PCcards[2].name);
                    console.log(player_cards3 + PCcards[0].name + player_and2 + PCcards[1].name + pcand + PCcards[2].name);
                    console.log(player_score + PC.score);
                    playtest();
        
        
    }
        
    }   
    }
        
    }  else if (move == "s"){
        console.log("Dealer flips the face down card...")
        dealer_flag = true;
        Dealer.score += Dealercards[1].value;
        playtest();

    }
    

    }

