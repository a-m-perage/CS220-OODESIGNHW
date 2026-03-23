"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
//used in accounting
const BlackJackMain_1 = require("./BlackJackMain");
//Class to manage player/dealer 
class Player {
    //ace bool used as flag
    constructor(name, score, ace, parray) {
        this.name = name;
        this.score = score;
        this.ace = ace;
        //array used to hold current cards
        this.parray = parray;
    }
    //function handles the adding of scores per player and the flagging of aces
    accounting(object) {
        if (object.Ace == true) {
            //send notice to ace flag func in Deck
        }
        BlackJackMain_1.currentPlayer.score += object.value;
    }
}
exports.Player = Player;
