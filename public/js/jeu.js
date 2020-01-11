import {Guerrier,Mage,Archer} from "./modules/heros.js";
import {Boss} from "./modules/bosses.js";

// VARIABLES
    // Heros: Nom(.name),vie(.hp),attaque(.atk),couleur(.color),stat supp(.rage,.mana,.arrows)
    let warrior = new Guerrier("le Guerrier","",100,20,"darkred",0);
    let wizard = new Mage("le Mage","",100,20,"darkblue",0);
    let archer = new Archer("l'Archer","",100,20,"forestgreen",0);
    let alive = [warrior,wizard,archer];
    let deads = [];

    let pointsPool, statHero, autoConfirm;
    let manaPools = [7,9,10];

    // Bosses : Nom,vie,vie max,attaque
    let sauron = new Boss("Sauron",300,300,60);
    let chronos = new Boss("Chronos",666,666,30);
    let lilith = new Boss("Lilith",250,250,70);
    let bosses = [sauron,chronos,lilith];
    let targets = [warrior,wizard,archer];
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

    let choice,baseAtk;
// END VARIABLES

// FONCTIONS
// Confirmer
function confirm(message,auto) {
    let confirm
    if (auto == true) {
        confirm = true;
    } else {
        do {
            confirm = prompt(message)
            if (confirm.toLowerCase() == "oui" || confirm == "") {
                confirm = true;
            } else if (confirm.toLowerCase() == "non") {
                confirm = false;
            } else {
                confirm = "nope"
                alert("Veuillez entrer 'oui' ou 'non'.")
            }
        } while (confirm != true && confirm != false);
    }
    return confirm
}
// Nommer les héros
function name(hero) {
    let name = prompt(`Nomme ${hero.class} :`);
    if (name == "") {
        switch (hero.class) {
            case "Guerrier":
                return "War";
            case "Mage":
                return "Wiz";
            case "Archer":
                return "Arc";
        } 
    } else {
        return name;
    }
    
}
// Ditribution des points
function distrib(hero,nomStat,stat,statHero) {
    console.log(`Vous avez accès à ${stat} ${nomStat} à distribuer entre vos héros.`);
    do {
        do {
            if (nomStat == "Health Points") {
                statHero = parseInt(prompt(`Combien de ${nomStat} souhaitez-vous donner à ${hero.name} ?
(Default: 100)`));
            } else {
                statHero = parseInt(prompt(`Combien de ${nomStat} souhaitez-vous donner à ${hero.name} ?
(Default: 20)`));
            }
            if (statHero < 0) {
                alert("Entrez une valeur entière positive.");
            }
        } while (statHero < 0);
        if (statHero <= stat) {
            if (nomStat == "Health Points") {
                hero.hp = statHero;
            } else {
                hero.atk = statHero;
            }
        } else if (statHero > stat) {
            alert("Vous n'avez pas assez de points à disposition. ${stat} points disponibles.");
        } else {
            if (nomStat == "Health Points") {
                statHero = 100;
            } else {
                statHero = 20;
            }
        }
    } while (statHero > stat);
    return statHero;
}
// END FONCTIONS

// SETUP
    // mana et flèches
    wizard.mana = manaPools[parseInt(Math.random()*3)];
    archer.arrows = parseInt(Math.random()*5+7);

    // noms
    do {
        warrior.name = name(warrior);
        wizard.name = name(wizard);
        archer.name = name(archer);
    } while (confirm(`Souhaitez vous confirmer ceci ?
    - Warrior : ${warrior.name}
    - Mage : ${wizard.name}
    - Archer : ${archer.name}
-> oui / non`,false) == false)
    
    // stats
    do {
        pointsPool = [300,60];  //Health pool, Attack pool
        pointsPool[0] -= distrib(warrior,"Health Points",pointsPool[0],statHero);
        pointsPool[0] -= distrib(wizard,"Health Points",pointsPool[0],statHero);
        pointsPool[0] -= distrib(archer,"Health Points",pointsPool[0],statHero);
        pointsPool[1] -= distrib(warrior,"Attack Points",pointsPool[1],statHero);
        pointsPool[1] -= distrib(wizard,"Attack Points",pointsPool[1],statHero);
        pointsPool[1] -= distrib(archer,"Attack Points",pointsPool[1],statHero);
        if (pointsPool[0] == 300 && pointsPool[1] == 60) {
            autoConfirm = true;
        }
    } while (confirm(`Il vous reste ${pointsPool[0]} HP et ${pointsPool[1]} Atk en pool.
Souhaitez vous confirmer ceci ?
        - Warrior : ♥ ${warrior.hp} / ⚔ ${warrior.atk}
        - Mage : ♥ ${wizard.hp} / ⚔ ${wizard.atk}
        - Archer : ♥ ${archer.hp} / ⚔ ${archer.atk}
-> oui / non`,autoConfirm) == false)
    baseAtk = [warrior.atk,wizard.atk,archer.atk];

    // présentation héros terminés
    console.log("Voici les %cHéros %c:","color: darkgoldenrod","color: black");
    console.log(warrior)
    console.log(wizard)
    console.log(archer)
    console.log(`
    
    
    
    `)

    // choix boss
    boss = bosses[parseInt(Math.random()*3)]

    // mise en situation
    console.log(`Une menace plane sur le monde. En effet, un mal ancestral s'est réveillé et menace de conquérir tous les pays libres.
Tandis que la guerre fait rage, les armées s'affrontant sans répis, un groupe de héros s'est formé et à accepté la quête consistant à détruire le mal à sa source.
Ainsi, ${warrior.name} ${warrior.class}, ${wizard.name} ${wizard.class} et ${archer.name} ${archer.class} se retrouvent face à ${boss.name} au cœur de son territoire.`);
    console.log(`%c${warrior.name}%c : Je me batterai pour la liberté jusqu'à mon dernier souffle !`,"color:darkred","color:black")
    console.log(`%c${wizard.name}%c : Je suis un serviteur du Feu Secret, détenteur de la flamme d’Anor. Le feu sombre ne vous servira à rien, ${boss.name}. Repartez dans l’ombre !`,"color:darkblue","color:black")
    console.log(`%c${archer.name}%c : Mes flèches ne ratent jamais leur cible, tu connais les porc-épics ?`,"color:forestgreen","color:black")
    console.log(`%c${boss.name}%c : STUPIDES MORTELS ! VOTRE PRÉSENCE ICI PROUVE QUE VOUS AVEZ ABANDONNÉ VOS ESPOIRS DE VIVRE !`,"color:darkmagenta","color:black;font-weight:600")
    console.log("%c-------------- Le combat commence ! --------------","font-size : 30px;color:cadetblue")
// END SETUP

// BOSS FIGHT
while (boss.hp > 0 && alive.length > 0) {

    // Choix de la posture
    for (let i = 0; i < alive.length; i++) {
        choice = parseInt(prompt(`Choisissez la posture de ${alive[i].name} :
    (1) Attaque (+⚔/-♥)
    (2) Défense (-⚔/+♥)
    (3) Défaut (base ⚔/base ♥)`));
        switch (choice) {
            case 1: //Posture d'attaque
                alive[i].attackPos();
                break;
            case 2: //Posture de défense
                alive[i].defensePos();
                targets.push(alive[i]);
                break;
            default: //Pas de posture particulières
            console.log(`%c${alive[i].name}%c ne prend pas de posture particulière.
    ♥ ${alive[i].hp} 
    ⚔ ${alive[i].atk}`,`color:${alive[i].color}`,"color:black");
        }
    }

    // Attaques
    // Tour joueur
    for (let i = 0; i < alive.length; i++) {
        alive[i].fight(boss);
    }
    // Tour boss
    if (boss.hp > boss.maxHp * 0.2) {
        boss.attack(targets);
    } else if (boss.hp < boss.maxHp * 0.2 && boss.hp > 0) {
        choice = parseInt(Math.random()*riddles.length);
        boss.cruelRiddle(riddles[choice],answers[choice],alive);
    } else {
        console.log(`%c${boss.name}%c : "MAIS...? C'EST IMPOSSIBLE ! ET MON ÉNIGME !?"`,"color:darkmagenta","color:black;font-weight:600;");        
    }

    // Reset des postures
    for (let i = 0; i < alive.length; i++) { //Posture offensive
        if (alive[i].hp > 0) {
            if (alive[i].atk > baseAtk[i]) {
                alive[i].hp = Math.floor(alive[i].hp/0.75);
                alive[i].atk = Math.floor(alive[i].atk/1.4);
                console.log(`%c${alive[i].name}%c relâche sa posture offensive: ♥ ${alive[i].hp} ⚔ ${alive[i].atk}`,`color:${alive[i].color}`,"color:black");
            } else if(alive[i].atk < baseAtk[i]) { //Posture défensive
                alive[i].hp = Math.floor(alive[i].hp/2.5);
                alive[i].atk = Math.floor(alive[i].atk/0.5);
                targets.pop();
                console.log(`%c${alive[i].name}%c relâche sa posture défensive: ♥ ${alive[i].hp} ⚔ ${alive[i].atk}`,`color:${alive[i].color}`,"color:black");
            } else {
                console.log(`%c${alive[i].name}%c : ♥ ${alive[i].hp} ⚔ ${alive[i].atk}`,`color:${alive[i].color}`,"color:black");
            }
        }
    }

    //Supression des morts
    for (let i = alive.length-1; i >= 0; i--) {
        if (alive[i].hp <= 0) {
            console.log(`%c☠ %c${alive[i].name}%c est mort.`,"font-size:20px",`color:${alive[i].color}`,"color:black");
            deads.push(alive[i]);
            alive.splice(i,1);
            targets.splice(i,1);
        }
    }
}
// END BOSS FIGHT

alert("Game Over");
if (boss.hp <= 0 && alive.length == 3) {
    console.log(`Vous avez vaincu %c${boss.name}%c !!! Félicitations, vous avez gagné !
    Ainsi, la vaillance des héros aura sauvé le monde d'une destruction certaine.`,"color:darkmagenta","color:black");
} else if (boss.hp <= 0 && alive.length != 3){
    console.log(`Vous avez vaincu %c${boss.name}%c !!! Félicitations, vous avez gagné !
    Ainsi, la vaillance des héros aura sauvé le monde d'une destruction certaine mais pas sans un prix.
    En effet, ${deads.length} héros ont péris au combat.`,"color:darkmagenta","color:black");
    if (deads.length > 1) {
        console.log(`Le monde se souviendra de %c${deads[i].name}%c ${deads[i].class} et de %c${deads[i].name}%c ${deads[i].class}.`,`color:${deads[i].color}`,"color:black",`color:${deads[i].color}`,"color:black");
    } else {
        console.log(`Le monde se souviendra de %c${deads[i].name}%c ${deads[i].class}.`,`color:${deads[i].color}`,"color:black");    }
} else {
    console.log(`Malheureusement, le groupe de héros se retrouva impuissant face à %c${boss.name}%c.
    Après s'être débarassé d'eux et plus rien ne pouvant se mettre en travers de son chemin, %c${boss.name}%c conquérit les pays libres un à un à une vitesse phénoménale.
    Ce fût bientôt le début d'un âge sombre pour le monde...
    %cGAME OVER`,"color:darkmagenta","color:black","color:darkmagenta","color:black","color:red;font-size:25px;font-weight:600");
}