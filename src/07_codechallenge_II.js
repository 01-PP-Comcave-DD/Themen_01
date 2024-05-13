/*********   CODE CHALLENGE 02 **********/

/*
Geben über eine Prompt-Anforderung einen Namen ein
Geben über eine Prompt-Anforderung ein Alter ein

Geben Sie in Abhängigkeit vom angegebenen Alter 
folgende Getränkeauswahl in die Konsole aus :

Alter 0-5 // Milch  --> age > 0 AND age < 6
Alter 6-12 // Saft
Alter 13-17 // Cola
18 + // Wein

-->zB: "Max trinkt Cola."

/* Getränke-Challenge */


/******* Vorüberlegung / SWITCH|CASE 2 *******/

//**********Variante 1**********//

const prompt = require('prompt-sync')({sigint: true});

// Prompt-Anforderung für den Namen
const name = prompt("Bitte gib deinen Namen ein: ");

// Prompt-Anforderung für das Alter und Umwandlung in eine Zahl
const age = parseInt(prompt("Bitte gib dein Alter ein: "));

// Switch-Anweisung zur Auswahl des Getränks basierend auf dem Alter
let drink;

switch (true) {
    case (age >= 0 && age <= 5):
        drink = "Milch";
        break;
    case (age >= 6 && age <= 12):
        drink = "Saft";
        break;
    case (age >= 13 && age <= 17):
        drink = "Cola";
        break;
    default:
        drink = "Wein";
}

// Ausgabe des Ergebnisses in die Konsole
console.log(name + " trinkt " + drink + ".");




//**********Variante 2**********//
// let Name = prompt("Gib mir deinen Namen: ");
// let age = prompt("Jetzt dein Alter: ");

// const cond = true;
// const value = 2;

// switch (cond) {
//     case (value == 1):
//         console.log("Milch");
//         break;
//     case (value == 2):
//         console.log("Saft");
//         break;
//     default:
//         console.log("Wein");
//         break;
// }