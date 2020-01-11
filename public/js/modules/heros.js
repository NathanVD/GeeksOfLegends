//Classe de personnages
export class Personnage {
    constructor(nom,pv,attaque,spécial,couleur,classe){
        this.name = nom;
        this.hp = pv;
        this.atk = attaque;
        this.special = spécial;
        this.color = couleur;
        this.class = classe;
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
    constructor(nom,pv,attaque,spécial,couleur,classe){
        super(nom,pv,attaque,spécial,couleur,classe);
    }
    fight(boss) {
        this.special++
        console.log(`%c${this.name}%c sent sa rage monter... ${this.special}/4`,`color:${this.color}`,"color:black");
        if (this.special == 4) {
            this.atk = Math.ceil(this.atk*1.25);
            boss.hp -= this.atk;
            console.log(`%c${this.name}%c attaque violemment %c${boss.name}%c et lui inflige ${this.atk} dégâts !!
    Il lui reste ♥${boss.hp}.
    Sa rage redescend.`,`color:${this.color}`,"color:black","color:darkmagenta","color:black");
            this.atk /= 1.25;
            this.special = 0;
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
    constructor(nom,pv,attaque,spécial,couleur,classe){
        super(nom,pv,attaque,spécial,couleur,classe);
    }
    fight(boss) {
        if (this.special - 2 >= 0) {
            boss.hp -= this.atk;
            this.special -= 2;
            console.log(`%c${this.name}%c lance un sort sur %c${boss.name}%c et lui inflige ${this.atk} dégâts !!
    Il lui reste ♥${boss.hp}.
    Il reste ${this.special} mana à %c${this.name}%c.`,`color:${this.color}`,"color:black","color:darkmagenta","color:black",`color:${this.color}`,"color:black");
        } else {
            console.log(`%c${this.name}%c n'a plus assez de mana et ne peut plus lancer de sort, il lui faut méditer un tour pour en récupérer.`,`color:${this.color}`,"color:black");
            this.special += 7;
        }
    }
}

/* 
3) Archer
Propriétés : nom, points de vie, points d’attaque, munitions
Postures : défense, attaque, normal
*/
export class Archer extends Personnage {
    constructor(nom,pv,attaque,spécial,couleur,classe){
        super(nom,pv,attaque,spécial,couleur,classe);
    }
    fight(boss) {
        if (this.special -2 >= 0) {
            boss.hp -= this.atk;
            this.special -= 2;
            console.log(`%c${this.name}%c attaque %c${boss.name}%c et lui inflige ${this.atk} dégâts !!
    Il lui reste ♥${boss.hp}
    Il reste ${this.special} flèches à %c${this.name}%c.`,`color:${this.color}`,"color:black","color:darkmagenta","color:black",`color:${this.color}`,"color:black");
        } else {
            console.log(`%c${this.name}%c n'a plus assez de flèches et ne peut plus tirer, il lui faut un tour pour en récupérer.`,`color:${this.color}`,"color:black");
            this.special += 7;
        }
    }
}