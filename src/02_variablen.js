// Zeilenkommentar | Strg + #

/**
 * 
 * Block-Kommentar
 * 
 */

/***** Variablen 01 *****/

//console.log("Hi");
//console.log(Hi);

/* Deklaration + Wertzuweisung I */

//let firstName; // Deklaration (Definition)
//console.log(firstName); //Ausgabe
//firstName = "IchBins"; // Wertzuweisung | assignment
//console.log(firstName); //Ausgabe
//let familyName = "Nicht"; // Deklaration + Wertzuweisung
//console.log("Hi, ich bin " + firstName + " " + familyName + "!"); // --> Hi, ich bin IchBins Nicht!

/*  
    Wertzuweisung II + Datentypen 
    JS ist ein untypisierte Sprache!
*/

// let test;
// console.log("Inhalt: " + test); // Ausgabe Inhalt
// console.log("Datentyp: " + typeof test); // Ausgabe Datentyp
// console.log("----------------------------------");

// test = "hi"; // ist ein string - ´hi´ - kann auch so stehen, besser ist definitiv mit ""
// console.log("Inhalt: " + test); // Ausgabe Inhalt
// console.log("Datentyp: " + typeof test); // Ausgabe Datentyp
// console.log("----------------------------------");

// test = 2; // number
// console.log("Inhalt: " + test); // Ausgabe Inhalt
// console.log("Datentyp: " + typeof test); // Ausgabe Datentyp
// console.log("----------------------------------");

// test = true; //
// console.log("Inhalt: " + test); // Ausgabe Inhalt
// console.log("Datentyp: " + typeof test); // Ausgabe Datentyp
// console.log("----------------------------------");

/* Variablen vs. Konstanten in JS */

//Variable
let test; //Variable : Deklaration
test = "hi"; //Wertzuweisung (Inizialisierung)
test = "hello"; //Überschreiben
console.log("Inhalt: " + test); // Ausgabe

// Konstante
const test2 = "Moin"; //Deklaratin muss sofort angegeben werden
test2 = "Mahlzeit"; //Lautzeitfehler (Runtimeerror) !!
console.log("Inhalt: " + test2); // Ausgabe

