export class Card {
    public constructor(name, value, Ace) {
        this.name = name;
        this.value = value;
        this.Ace = Ace;
        //Ace variable used to flag if there needs to be special care when counting card values
    }

    //create function called shuffle deck which uses the constructor to make an array of cards and then randomly sorts them

}

export function shuffledeck(): string {
        return "Shuffling Deck";
    }