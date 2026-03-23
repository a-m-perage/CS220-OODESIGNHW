export class Player {

    //Fields go here
    name: string;
    score: number;
    ace: boolean;

    constructor (name:string, score:number, ace:boolean) {
        this.name = name;
        this.score = score;
        this.ace = ace;
    }

    //function handles the adding of scores per player and the flagging of aces
    accounting () {
        
    }

}