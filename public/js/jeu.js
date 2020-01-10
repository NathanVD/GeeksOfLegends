import {Guerrier,Mage,Archer} from "./modules/heros.js";
import {Boss} from "./modules/bosses.js";

// VARIABLES
    //Heros: Nom(.name),vie(.hp),attaque(.atk),stat supp(.rage,.mana,.arrows)
    let warrior = new Guerrier(prompt("Nom du guerrier ?"),0,0,0);
    let mage = new Mage(prompt("Nom du mage ?"),0,0,0);
    let archer = new Archer(prompt("Nom de l'archer ?"),0,0,0);
    let players = [warrior,mage,archer];

    let pointsPool = [300,60]; //Health pool, Attack pool
    let confirm = false;
    let statHero;
    let manaPools = [7,9,10];

    //Bosses : Nom,vie,vie max,attaque
    let sauron = new Boss("Sauron",300,300,60);
    let chronos = new Boss("Chronos",666,666,30);
    let lilith = new Boss("Lilith",250,250,70);
    let riddles = ["Qu'est ce qui est petit et marron ?","Qu'est ce qui marche à 4 pattes le matin, à 2 pattes le midi et à 3 pattes le soir ?"]
    let answers = ["marron","homme"]
// END VARIABLES

// FONTIONS
function distrib(hero,nomStat,stat,statHero) {
    console.log(`Vous avez accès à ${stat} ${nomStat} à distribuer entre vos héros.`);
    do {
        do {
            statHero = parseInt(prompt(`Combien de ${nomStat} souhaitez-vous donner à ${hero.name} ?`));
            if (statHero < 0 || isNaN(statHero)) {
                alert("Entrez une valeur entière positive.");
            }
        } while (statHero < 0 || isNaN(statHero));
        if (statHero > stat) {
            alert("Vous n'avez pas assez de points à disposition.");
        } else {
            if (nomStat == "Health Points") {
                hero.hp = statHero;
            } else {
                hero.atk = statHero;
            }
        }
    } while (statHero > stat);
    return statHero;
}
// END FONCTIONS

// SETUP
    mage.mana = manaPools[parseInt(Math.random()*3)];
    archer.arrows = parseInt(Math.random()*5+7);
    while (confirm == false) {
        pointsPool[0] -= distrib(warrior,"Health Points",pointsPool[0],statHero);
        pointsPool[0] -= distrib(mage,"Health Points",pointsPool[0],statHero);
        pointsPool[0] -= distrib(archer,"Health Points",pointsPool[0],statHero);
        pointsPool[1] -= distrib(warrior,"Attack Points",pointsPool[1],statHero);
        pointsPool[1] -=  distrib(mage,"Attack Points",pointsPool[1],statHero);
        pointsPool[1] -=  distrib(archer,"Attack Points",pointsPool[1],statHero);
        do {
            confirm = prompt(`Il vous reste ${pointsPool[0]} HP et ${pointsPool[1]} Atk en pool.
        Souhaitez vous confirmer ceci ?
            - Warrior : ♥ ${warrior.hp} / ⚔ ${warrior.atk}
            - Mage : ♥ ${mage.hp} / ⚔ ${mage.atk}
            - Archer : ♥ ${archer.hp} / ⚔ ${archer.atk}
        -> oui / non`)
            if (confirm.toLowerCase() == "oui") {
                confirm = true;
            } else if (confirm.toLowerCase() == "non") {
                confirm = false;
                pointsPool = [300,60];
            } else {
                confirm = "nope"
                alert("Veuillez entrer 'oui' ou 'non'.")
            }
        } while (confirm != true && confirm != false);
    }
    console.log("Voici les %cHéros %c:","color: darkgoldenrod","color: black");
    console.log(warrior)
    console.log(mage)
    console.log(archer)
// END SETUP

// TEST méthode riddle
sauron.hp = 2
sauron.cruelRiddle(riddles[1],answers[1],players);