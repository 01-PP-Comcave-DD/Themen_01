
/*********   CODE CHALLENGE 01 **********/
 
/*
Geben Sie über eine Prompt-Anforderung eine Zahl ein.
Geben Sie über eine Prompt-Anforderung eine zweite Zahl ein.
Berechnen Sie die Summe der beiden Zahlen.
Geben Sie die Summe der Zahlen in die Konsole aus:
"Die Summe der Zahlen ist: summe"
*/

const prompt = require('prompt-sync')({sigint: true});
// Zahleneingabe über eine Prompt-Anforderung
//parsefloat() --> wandelt einen String in eine Dezimalzahl (eine Zahl mit Dezimalstellen mit Nachkommazahl) um
let zahl1 = parseFloat(prompt("Gib die erste Zahl ein: "));
let zahl2 = parseFloat(prompt("Gib die zweite Zahl ein: "));

//parseInt() --> wandelt einen String in eine Dezimalzahl (eine Ganzzahl ohne Nachkommazahl) um
//let zahl1 = parseInt(prompt("Gib die erste Zahl ein: "));
//let zahl2 = parseInt(prompt("Gib die zweite Zahl ein: "));

// Berechnung der Summe
let summe = zahl1 + zahl2;

// Ausgabe der Summe in der Konsole
console.log("Die Summe der Zahlen ist: " + summe);
