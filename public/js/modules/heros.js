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
        this.atk *= 1.4;
        this.hp *= 0.75;
        console.log(`${this.name} prend une posture offensive.
        ⟰ ⚔ = ${this.atk}
        ⟱ ♥ = ${this.hp}`);
    }
    defensePos(){
        this.atk *= 0.5;
        this.hp *= 2.5;
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
    constructor(classe,nom,pv,attaque,couleur,statSupp){
        super(classe,nom,pv,attaque,couleur);
        this.rage = statSupp;
    }
    fight(boss) {
        boss.hp -= this.atk;
        console.log(`%c${this.name}%c attaque %c${boss.name}%c et lui inflige ${this.atk} dégâts !!
Il lui reste ♥${boss.hp}`,`color:${this.color}`,"color:black","color:darkmagenta","color:black");
    }
}

/* 
2) Mage
Propriétés : nom, points de vie, points d’attaque, points de mana
Postures : défense, attaque, normal
*/
export class Mage extends Personnage {
    constructor(classe,nom,pv,attaque,couleur,statSupp){
        super(classe,nom,pv,attaque,couleur);
        this.mana = statSupp;
    }
    fight(boss) {
        boss.hp -= this.atk;
        console.log(`%c${this.name}%c attaque %c${boss.name}%c et lui inflige ${this.atk} dégâts !!
Il lui reste ♥${boss.hp}`,`color:${this.color}`,"color:black","color:darkmagenta","color:black");
    }
}

/* 
3) Archer
Propriétés : nom, points de vie, points d’attaque, munitions
Postures : défense, attaque, normal
*/
export class Archer extends Personnage {
    constructor(classe,nom,pv,attaque,couleur,statSupp){
        super(classe,nom,pv,attaque,couleur);
        this.arrows = statSupp;
    }
    fight(boss) {
        boss.hp -= this.atk;
        console.log(`%c${this.name}%c attaque %c${boss.name}%c et lui inflige ${this.atk} dégâts !!
Il lui reste ♥${boss.hp}`,`color:${this.color}`,"color:black","color:darkmagenta","color:black");
    }
}