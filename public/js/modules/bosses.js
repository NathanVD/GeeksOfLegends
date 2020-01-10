//Classe de bosses
export class Boss {
    constructor(nom,pv,pvMax,attaque){
        this.name = nom;
        this.hp = pv;
        this.maxHp = pvMax;
        this.atk = attaque;
    }
    cruelRiddle(énigme,solution,joueurs){
        if (this.hp < this.maxHp * 0.2) {
            console.log(`%c${this.name} %cutilise %cCruel Riddle%c, vous avez 3 essais pour répondre à son énigme sans quoi il détruira votre groupe.`,"color:darkmagenta","color:black","color:crimson;background:black","color:black");
            let solve;
            let search = solution;
            let countdown = 3;
            do {
                solve = prompt(énigme).toLowerCase();
                solve = solve.replace(" ","");
                solve = solve.indexOf(search);
                if (solve == -1){
                    countdown--
                    if (countdown > 0) {
                        console.log(`%c${this.name} : "%cHAHAHAHAHA !!! %cRaté. IL NE VOUS RESTE QUE ${countdown} ESSAIS !"`,"color:darkmagenta","color:black;font-weight:800;","font-weight:600");
                    } else {
                        console.log(`%c${this.name} : "%cHAHAHAHAHA !!! %cRaté. IL NE VOUS RESTE AUCUN ESSAI !"`,"color:darkmagenta","color:black;font-weight:800;","font-weight:600");
                    }
                }
            } while (solve == -1 && countdown > 0)
            if(solve != -1){
                this.hp = 0;
                console.log(`La vie de ${this.name} descend à ${this.hp}.`);
                if (solution == "marron") {
                    console.log(`%c${this.name} %c: "Putain, il est fort ce con..."`,"color:darkmagenta","color:black;font-weight:600;");
                } else {
                    console.log(`%c${this.name} %c: "NOOOOOOON !!! %cCOMMENT AVEZ VOUS TROUVÉ LA SOLUTION ?"`,"color:darkmagenta","color:black;font-weight:800;","font-weight:600");
                }
                console.log(`Vous avez vaincu %c${this.name}%c.`,"color:darkmagenta","color:black")
            }else{
                console.log(`%c${this.name} : "%cVOUS AVEZ PERDU ! %cMOUHAHAHAHA !!!"`,"color:darkmagenta","color:black;font-weight:600;","font-weight:800");
                for(let i=0;i<3;i++){
                    joueurs[i].hp = 0;
                    console.log(`%c☠ %c${joueurs[i].name} %c est mort.`,"font-size:20px","color:darkgoldenrod","color:black");
                }
            }

        }
    }
}