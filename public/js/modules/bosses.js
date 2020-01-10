//Classe de bosses
export class Boss {
    constructor(nom,pv,pvMax,attaque){
        this.name = nom;
        this.hp = pv;
        this.maxHp = pvMax;
        this.atk = attaque;
    }
    attack(targets){
        let choice = targets[parseInt(Math.random()*targets.length)];
        choice.hp -= this.atk;
        console.log(`%c${this.name}%c attaque %c${choice.name}%c et lui inflige ${this.atk} dégâts !!!`,"color:darkmagenta","color:black","color:darkgoldenrod","color:black");
    }
    cruelRiddle(énigme,solution,joueurs){
        if (this.hp > 0) {
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
                        console.log(`%c${this.name} %c: "HAHAHAHAHA !!! %cRaté. IL NE VOUS RESTE QUE ${countdown} ESSAIS !"`,"color:darkmagenta","color:black;font-weight:800;","font-weight:600");
                    } else {
                        console.log(`%c${this.name} %c: "HAHAHAHAHA !!! %cRaté. IL NE VOUS RESTE AUCUN ESSAI !"`,"color:darkmagenta","color:black;font-weight:800;","font-weight:600");
                    }
                }
            } while (solve == -1 && countdown > 0)
            if(solve != -1){
                this.hp = 0;
                if (solution == "marron") {
                    console.log(`%c${this.name} %c: "Putain, il est fort ce con..."`,"color:darkmagenta","color:black;font-weight:600;");
                } else {
                    console.log(`%c${this.name} %c: "NOOOOOOON !!! %cCOMMENT AVEZ VOUS TROUVÉ LA SOLUTION ?"`,"color:darkmagenta","color:black;font-weight:800;","font-weight:600");
                }
                console.log(`La vie de %c${this.name}%c descend à ${this.hp}.`,"color:darkmagenta","color:black");
                console.log(`Vous avez vaincu %c${this.name}%c à son propre jeu.`,"color:darkmagenta","color:black")
            }else{
                console.log(`%c${this.name} %c: "VOUS AVEZ PERDU ! %cMOUHAHAHAHA !!!"`,"color:darkmagenta","color:black;font-weight:600;","font-weight:800");
                for(let i=0;i<joueurs.length;i++){
                    joueurs[i].hp = 0;
                }
            }
        }
    }
}