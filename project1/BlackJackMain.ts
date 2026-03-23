//Game start

import { shuffledeck } from './Deck.ts';
import { Deck } from './Deck.ts';
import { Player } from './Player.ts';



//Calls for Deck to create deck of cards
//Calls for Player to create two players, dealer and player
console.log(shuffledeck());
for (let i = 51; i > -1; i--) {
    console.log(Deck[i])
}
console.log(Deck[51].name)
let currentCard = Deck.pop;
console.log(currentCard);


let dealermessage_1 = ("Dealer deals a(n) ")
let and = " and one card face down "
let dealer_score = "Their current score is "
let player_dealt = "You are dealt a(n) "
let pcand = " and a(n) "
let player_score = "Your current score is "


while (true) {
    console.log(shuffledeck());

    let Dealer = new Player("Dealer", 0 , false);
    let PC = new Player("Player", 0, false);




}
