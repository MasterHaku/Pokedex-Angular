import { Ability } from "./model";

export class Pokemon {
    //liste: string[]= ["Pikachu", "Bulbizarre", "Raichu", "Eintein","Miaouss"]

    constructor(public id:number,public name: string, public abilities: Ability[], public weight:number|undefined, public height:number|undefined, public url:string){

    }
}
