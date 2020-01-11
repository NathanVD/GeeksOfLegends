//Classe de personnages
export class Personnage {
    constructor(classe,nom,pv,attaque,couleur){
        this.class = classe;
        this.name = nom;
        this.hp = pv;
        this.atk = attaque;
        this.color = couleur;
    }
    attackPos(){
        this.atk = Math.floor(this.atk*1.4);
        this.hp =  Math.floor(this.hp*0.75);
        console.log(`${this.name} prend une posture offensive.
        ⟰ ⚔ = ${this.atk}
        ⟱ ♥ = ${this.hp}`);
    }
    defensePos(){
        this.atk = Math.floor(this.atk * 0.5);
        this.hp = Math.floor(this.hp * 2.5);
        console.log(`${this.name} prend une posture défensive. Il augmente ses chances d'être attaqué.
        ⟰ ♥ = ${this.hp}
        ⟱ ⚔ = ${this.atk}`);
    }
}

/* 
1) Guerrier
Propriétés : nom, points de vie, points d’attaque, points de rage
Postures : défense, attaque, normal
*/
export class Guerrier extends Personnage {
    constructor(classe,nom,pv,attaque,couleur,rage){
        super(classe,nom,pv,attaque,rage);
        this.rage = statSupp;
    }
    fight(boss) {
        this.rage++
        console.log(`%c${this.name}%c sent sa rage monter...`,`color:${this.color}`,"color:black");
        if (this.rage = 4) {
            this.atk *= 1.25;
            boss.hp -= this.atk;
            console.log(`%c${this.name}%c attaque violemment %c${boss.name}%c et lui inflige ${this.atk} dégâts !!
    Il lui reste ♥${boss.hp}.
    Sa rage redescend.`,`color:${this.color}`,"color:black","color:darkmagenta","color:black");
            this.atk /= 1.25;
            this.rage = 0;
        } else {
            boss.hp -= this.atk;
            console.log(`%c${this.name}%c attaque %c${boss.name}%c et lui inflige ${this.atk} dégâts !!
    Il lui reste ♥${boss.hp}`,`color:${this.color}`,"color:black","color:darkmagenta","color:black");
        }
    }
}

/* 
2) Mage
Propriétés : nom, points de vie, points d’attaque, points de mana
Postures : défense, attaque, normal
*/
export class Mage extends Personnage {
    constructor(classe,nom,pv,attaque,couleur,mana){
        super(classe,nom,pv,attaque,couleur);
        this.mana = mana;
    }
    fight(boss) {
        if (this.mana - 2 >= 0) {
            boss.hp -= this.atk;
            this.mana -= 2;
            console.log(`%c${this.name}%c lance un sort sur %c${boss.name}%c et lui inflige ${this.atk} dégâts !!
    Il lui reste ♥${boss.hp}.
    Il reste ${this.mana} à %c${this.name}%c.`,`color:${this.color}`,"color:black","color:darkmagenta","color:black",`color:${this.color}`,"color:black");
        } else {
            console.log(`%c${this.name}%c n'a plus assez de mana et ne peut plus lancer de sort, il lui faut méditer un tour pour en récupérer.`,`color:${this.color}`,"color:black");
            this.mana += 7;
        }
    }
}

/* 
3) Archer
Propriétés : nom, points de vie, points d’attaque, munitions
Postures : défense, attaque, normal
*/
export class Archer extends Personnage {
    constructor(classe,nom,pv,attaque,couleur,flèches){
        super(classe,nom,pv,attaque,couleur);
        this.arrows = flèches;
    }
    fight(boss) {
        if (this.arrows -2 >= 0) {
            boss.hp -= this.atk;
            this.arrows -= 2;
            console.log(`%c${this.name}%c attaque %c${boss.name}%c et lui inflige ${this.atk} dégâts !!
    Il lui reste ♥${boss.hp}
    Il reste ${this.arrows} à %c${this.name}%c.`,`color:${this.color}`,"color:black","color:darkmagenta","color:black",`color:${this.color}`,"color:black");
        } else {
            console.log(`%c${this.name}%c n'a plus assez de flèches et ne peut plus tirer, il lui faut un tour pour en récupérer.`,`color:${this.color}`,"color:black");
            this.arrows += 7;
        }
    }
}