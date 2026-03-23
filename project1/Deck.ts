//var unDeck: Array<Card>;
//let cards = 52;

class Card {

    //Fields go here
    name: string;
    value: number;
    Ace: boolean;

    constructor(name:string, value:number, Ace:boolean) {
        this.name = name;
        this.value = value;
        this.Ace = Ace;
        //Ace variable used to flag if there needs to be special care when counting card values
    }
    //function for aces'. Triggers when ace is in play to change counts
}

const AceS = new Card("Ace of Spades", 11, true)
const AceH = new Card("Ace of Hearts", 11, true)
const AceC = new Card("Ace of Clubs", 11, true)
const AceD = new Card("Ace of Diamonds", 11, true)

const Deck = new Array(AceS);
Deck.push(AceH)
Deck.push(AceC)
Deck.push(AceD)

let ofS = " of Spades"
let ofH = " of Hearts"
let ofC = " of Clubs"
let ofD = " of Diamonds"
let count = 2;

while ( count < 11) {
    let temp = count.toString();
    const tempCard1 = new Card(temp + ofS, count, false)
    const tempCard2 = new Card(temp + ofH, count, false)
    const tempCard3 = new Card(temp + ofC, count, false)
    const tempCard4 = new Card(temp + ofD, count, false)
    Deck.push(tempCard1)
    Deck.push(tempCard2)
    Deck.push(tempCard3)
    Deck.push(tempCard4)
    count++
}

let J = "Joker"
let Q = "Queen"
let K = "King"

var tempCard = new Card(J + ofS, 10, false);
Deck.push(tempCard)
tempCard = new Card(J + ofH, 10, false);
Deck.push(tempCard)
tempCard = new Card(J + ofC, 10, false);
Deck.push(tempCard)
tempCard = new Card(J + ofD, 10, false);
Deck.push(tempCard)
tempCard = new Card(Q + ofS, 10, false);
Deck.push(tempCard)
tempCard = new Card(Q + ofH, 10, false);
Deck.push(tempCard)
tempCard = new Card(Q + ofC, 10, false);
Deck.push(tempCard)
tempCard = new Card(Q + ofD, 10, false);
Deck.push(tempCard)
tempCard = new Card(K + ofS, 10, false);
Deck.push(tempCard)
tempCard = new Card(K + ofH, 10, false);
Deck.push(tempCard)
tempCard = new Card(K + ofC, 10, false);
Deck.push(tempCard)
tempCard = new Card(K + ofD, 10, false);
Deck.push(tempCard)

console.log(Deck);

function randomnum (min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (let i = 51; i > -1; i--) {
    console.log(Deck[i])
}

export function shuffledeck(): string {
    for (let i = Deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [Deck[i], Deck[j]] = [Deck[j], Deck[i]];
    }

    return "Shuffling Deck.......";
    }
export {Deck};