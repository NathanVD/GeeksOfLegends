//Classe de bosses
export class Boss {
    constructor(nom,pv,pvMax,attaque){
        this.name = nom;
        this.hp = pv;
        this.maxHp = pvMax;
        this.atk = attaque;
    }
    cruelRiddle(énigme,solution,players){
        if (this.hp < this.maxHp * 0.2) {
            console.log(`%c${this.name} %cutilise %c"Cruel Riddle"%c, vous avez 3 essais pour répondre à son énigme sans quoi il détruira votre groupe.`,"color:darkmagenta","color:black","color:crimson;background:black","color:black");
            let solve;
            let countdown = 3;
            do {
                solve = prompt(énigme)
                if (solve != solution){
                    countdown--
                    console.log(`%c${this.name} : "%cHAHAHAHAHA !!! %cRaté. Il ne vous reste que ${countdown} essais !"`,"color:darkmagenta","color:black;font-weight:800;","font-weight:600");
                }
            } while (solution != solve && countdown > 0)
            if(solution == solve){
                this.hp = 0;
                console.log(`%c${this.name} %c: "NOOOOOOON !!! %cComment avez-vous pu trouver la solution ?"`,"color:darkmagenta","color:black;font-weight:800;","font-weight:600");
                console.log(`Vous avez vaincu %c${this.name}%c.`,"color:darkmagenta","color:black")
            }else{
                console.log(`%c${this.name} : "%cVous avez PERDU ! %cMOUHAHAHAHA !!!"`,"color:darkmagenta","color:black;font-weight:600;","font-weight:800");
                for(let i=0;i<3;i++){
                    players[i].hp = 0;
                    console.log(`%c${players[i].name} %c est mort.`,"color:darkgoldenrod","color:black");
                }
            }

        }
    }
}