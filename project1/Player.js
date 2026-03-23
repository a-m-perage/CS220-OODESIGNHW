"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
//used in accounting
var BlackJackMain_1 = require("./BlackJackMain");
//Class to manage player/dealer 
var Player = /** @class */ (function () {
    //ace bool used as flag
    function Player(name, score, ace, parray) {
        this.name = name;
        this.score = score;
        this.ace = ace;
        //array used to hold current cards
        this.parray = parray;
    }
    //function handles the adding of scores per player and the flagging of aces
    Player.prototype.accounting = function (object) {
        if (object.Ace == true) {
            //send notice to ace flag func in Deck
        }
        BlackJackMain_1.currentPlayer.score += object.value;
    };
    return Player;
}());
exports.Player = Player;
