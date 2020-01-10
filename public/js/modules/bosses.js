//Classe de bosses
export class Bosses {
    constructor(nom,pv,pvMax,attaque){
        this.name = nom;
        this.hp = pv;
        this.maxHp = pvMax;
        this.atk = attaque;
        this.statSupp = statSupp;
    }
    cruelRiddle(énigme,solution){
        if (this.hp < (this.maxHp*20)/100) {
            let solve;
            let countdown = 3;
            do {
                solve = prompt(énigme)
                if (solve != solution){
                    countdown--
                    console.log
                }
            } while (solution != solve)
            if(solution == prompt(énigme)){
                this.hp = 0;
            }else{

            }

        }
    }
}