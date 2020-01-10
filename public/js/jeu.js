import {Guerrier,Mage,Archer} from "./modules/heros.js";
import {Boss} from "./modules/bosses.js";

// VARIABLES
    //Heros: Nom(.name),vie(.hp),attaque(.atk),stat supp(.rage,.mana,.arrows)
    let warrior = new Guerrier(prompt("Nom du guerrier ?"),100,20,0);
    let wizard = new Mage(prompt("Nom du mage ?"),100,20,0);
    let archer = new Archer(prompt("Nom de l'archer ?"),100,20,0);
    let players = [warrior,wizard,archer];

    let pointsPool = [300,60]; //Health pool, Attack pool
    let confirm = false;
    let statHero;
    let manaPools = [7,9,10];

    //Bosses : Nom,vie,vie max,attaque
    let sauron = new Boss("Sauron",300,300,60);
    let chronos = new Boss("Chronos",666,666,30);
    let lilith = new Boss("Lilith",250,250,70);
    let bosses = [sauron,chronos,lilith];
    let boss;
    
    let riddles = [
        "Qu'est ce qui est petit et marron ?",
        "Qu'est ce qui marche à 4 pattes le matin, à 2 pattes le midi et à 3 pattes le soir ?",
        "Est-ce que je mens ?"
    ]
    let answers = [
        "marron",
        "homme",
        "paradoxe"
    ];

    let choice,baseHp,baseAtk;
// END VARIABLES

// FONTIONS
//ditribution des points
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

//combat
// function fight(players,boss,) {
    
// }
// END FONCTIONS

// SETUP
    wizard.mana = manaPools[parseInt(Math.random()*3)];
    archer.arrows = parseInt(Math.random()*5+7);
    // while (confirm == false) {
    //     pointsPool[0] -= distrib(warrior,"Health Points",pointsPool[0],statHero);
    //     pointsPool[0] -= distrib(wizard,"Health Points",pointsPool[0],statHero);
    //     pointsPool[0] -= distrib(archer,"Health Points",pointsPool[0],statHero);
    //     pointsPool[1] -= distrib(warrior,"Attack Points",pointsPool[1],statHero);
    //     pointsPool[1] -=  distrib(wizard,"Attack Points",pointsPool[1],statHero);
    //     pointsPool[1] -=  distrib(archer,"Attack Points",pointsPool[1],statHero);
    //     do {
    //         confirm = prompt(`Il vous reste ${pointsPool[0]} HP et ${pointsPool[1]} Atk en pool.
    //     Souhaitez vous confirmer ceci ?
    //         - Warrior : ♥ ${warrior.hp} / ⚔ ${warrior.atk}
    //         - Mage : ♥ ${wizard.hp} / ⚔ ${wizard.atk}
    //         - Archer : ♥ ${archer.hp} / ⚔ ${archer.atk}
    //     -> oui / non`)
    //         if (confirm.toLowerCase() == "oui") {
    //             confirm = true;
    //         } else if (confirm.toLowerCase() == "non") {
    //             confirm = false;
    //             pointsPool = [300,60];
    //         } else {
    //             confirm = "nope"
    //             alert("Veuillez entrer 'oui' ou 'non'.")
    //         }
    //     } while (confirm != true && confirm != false);
    // }
    baseHP = [warrior.hp,wizard.hp,archer.hp];
    baseAtk = [warrior.atk,wizard.atk,archer.atk];
    console.log("Voici les %cHéros %c:","color: darkgoldenrod","color: black");
    console.log(warrior)
    console.log(wizard)
    console.log(archer)
    console.log(`
    
    
    
    `)
    boss = bosses[parseInt(Math.random()*3)]
    console.log(`Une menace plane sur le monde. En effet, un mal ancestral s'est réveillé et menace de conquérir tous les pays libres.
Tandis que la guerre fait rage, les armées s'affrontant sans répis, un groupe de héros s'est formé et à accepté la quête consistant à détruire le mal à sa source.
Ainsi, ${warrior.name} le guerrier, ${wizard.name} le mage et ${archer.name} l'archer se retrouvent face à ${boss.name} au cœur de son territoire.`);
    console.log(`%c${warrior.name} %c: Je me batterai pour la liberté jusqu'à mon dernier souffle !`,"color:darkred","color:black")
    console.log(`%c${wizard.name} %c: Je suis un serviteur du Feu Secret, détenteur de la flamme d’Anor. Le feu sombre ne vous servira à rien, ${boss.name}. Repartez dans l’ombre !`,"color:darkblue","color:black")
    console.log(`%c${archer.name} %c: Mes flèches ne ratent jamais leur cible, tu connais les porc-épics ?`,"color:forestgreen","color:black")
    console.log(`%c${boss.name} %c: STUPIDES MORTELS ! VOTRE PRÉSENCE ICI PROUVE QUE VOUS AVEZ ABANDONNÉ VOS ESPOIRS DE VIVRE !`,"color:darkmagenta","color:black;font-weight:600")
    console.log("%c-------------- Le combat commence ! --------------","font-size : 30px;color:cadetblue")
// END SETUP

// TEST méthode riddle
// sauron.hp = 2
// sauron.cruelRiddle(riddles[1],answers[1],players);

while (boss.hp > 0 && players.length > 0) {
    //Choix de la posture
    for (let i = 0; i < players.length; i++) {
        choice = prompt(`Choisissez la posture de ${players[i].name} :
    (1) Attaque (+⚔/-♥)
    (2) Défense (-⚔/+♥)
    (3) Défaut (base ⚔/base ♥)`);
        switch (choice) {
            case 1: //Posture d'attaque
                players[i].attackPos();
                break;
            case 2: //Posture de défense
                players[i].defensePos();
                break;
            default: //Pas de posture particulières
            console.log(`${players[i].name} ne prend pas de posture particulière.
    ♥ ${players[i].hp} 
    ⚔ ${players[i].atk}`);
        }
    }
    //Reset des postures
    for (let i = 0; i < players.length; i++) {
        if (players[i].atk > baseAtk[i] || players[i].atk < baseAtk[i]) {
            players[i].hp = baseHp[i];
            players[i].atk = baseAtk[i];
            console.log(`${players[i].name} relâche sa posture : ♥ ${players[i].hp} ⚔ ${players[i].atk}`);
        } else {
            console.log(`${players[i].name} : ♥ ${players[i].hp} ⚔ ${players[i].atk}`);
        }
    }
}