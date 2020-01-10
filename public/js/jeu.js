import {Guerrier,Mage,Archer} from "./modules/heros.js";
//import {Bosses} from "/modules/bosses.js";

// VARIABLES
    let warrior = new Guerrier(prompt("Nom du guerrier ?"),150,10,0);
    let mage = new Mage(prompt("Nom du mage ?"),80,20,0);
    let archer = new Archer(prompt("Nom de l'archer ?"),90,15,0);
    let manaPools = [7,9,10];
// END VARIABLES

// SETUP
    mage.mana = manaPools[parseInt(Math.random()*3)];
    archer.arrows = parseInt(Math.random()*5+7);
    console.log("Voici les %cHéros %c:","color: darkgoldenrod","color: black");
    console.log(warrior)
    console.log(mage)
    console.log(archer)
