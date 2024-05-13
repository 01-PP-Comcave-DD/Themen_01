
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

