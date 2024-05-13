
/***** Funktionen 01 *****/
// 1. Kapselung von Codeblöcken


// test();               // call(er) -->Funktionsaufruf (Aufrufer)

// Funktionsrumpf | callee-->(das Ziel des Aufrufers)

function test()     // Funktionsdeklaration (Name der Funktion)
{
    console.log("Hallo, Rene!");
}

//--------------------------------------------------------//
/***** Funktionen 02a *****/
// 2a. Parametrisierung + Datenübergabe von INNEN

// outputNames();          // call(er) -->Funktionsaufruf (Aufrufer)

function outputNames() {
    // interne Variable | What happens in VEGAS ...
    let firstname = "Rene"
    console.log("Hallo, " + firstname + "!");

}

//--------------------------------------------------------//
/***** Funktionen 02b *****/
// 2b. Parametrisierung + Datenübergabe von AUSSEN

// outputNames2("Rene");          //Argumente --> Daten für die Parameter
// outputNames2("Patrick");
// outputNames2();      //<---- ohne Inhalt, deswegen der fehler undefined

function outputNames2(firstname) {    //Parameter
    console.log("Hallo, " + firstname + "!");
}

//--------------------------------------------------------//
/***** Funktionen 02c *****/
// 2c. Mehrere Parameter / Argumente

outputNames3("Rene","heißt anders als du")

const prompt = require('prompt-sync')({sigint: true});
outputNames3(prompt("Vorname?: "),prompt("Nachname?: "))     // Piping

function outputNames3(firstname, familyname) {    //Parameter
    console.log("Hallo, " + firstname + " " + familyname + "!");
}
