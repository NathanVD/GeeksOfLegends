//Classe de personnages
export class Personnage {
    constructor(nom,pv,attaque,statSupp){
        this.name = nom;
        this.hp = pv;
        this.atk = attaque;
        this.statSupp = statSupp;
    }
    attackPos(){
        this.atk *= 1.4;
        this.hp *= 0.75;
        console.log(`${this.name} prend une posture offensive.`);
    }
    defensePos(){
        this.atk *= 0.5;
        this.hp *= 2.5;
        console.log(`${this.name} prend une posture défensive.`);
    }
}

/* 
1) Guerrier
Propriétés : nom, points de vie, points d’attaque, points de rage
Postures : défense, attaque, normal
*/
export class Guerrier extends Personnage {
    constructor(nom,pv,attaque,statSupp){
        super(nom,pv,attaque);
        this.rage = statSupp;
    }
}

/* 
2) Mage
Propriétés : nom, points de vie, points d’attaque, points de mana
Postures : défense, attaque, normal
*/
export class Mage extends Personnage {
    constructor(nom,pv,attaque,statSupp){
        super(nom,pv,attaque);
        this.mana = statSupp;
    }
}

/* 
3) Archer
Propriétés : nom, points de vie, points d’attaque, munitions
Postures : défense, attaque, normal
*/
export class Archer extends Personnage {
    constructor(nom,pv,attaque,statSupp){
        super(nom,pv,attaque);
        this.arrows = statSupp;
    }
}