// Entscheidungsstrukturen | control flow

// Deklaration + Assignment
const ageJohn = 30;
const ageMark = 25;

// Deklaration
let isJohnOlder, isJohnEqual;

// Test | Logische Aussage
isJohnOlder = (ageJohn > ageMark);
isJohnEqual = (ageJohn == ageMark);

// Ausgabe
console.log("ageJohn: " + ageJohn);
console.log("ageMark: " + ageMark);
console.log("isJohnOlder: " + isJohnOlder);
console.log("isJohnEqual: " + isJohnEqual);
console.log("------------------");

/************ IF  ************/
// TINA --> There is no alternative!
// entweder JA oder nix ... alternativlos
// Türsteher-Politik (Doors 10 p.m.)

// if (false)  // fake it!
// if(isJohnOlder) // Verweis auf ein Testergebnis
// if(ageJohn > ageMark); // Test an sich
// {                                       // Anfang Codeblock
//     console.log("John ist älter!");
// }                                       // Ende Codeblock

/*-------------------------------*/

/************ IF - ELSE ************/
// mit Alternative
// entweder ja oder nein

// if (true)  // Fake it
// if (false)
// if(isJohnOlder) //Verweis auf ein testergebnis
if(ageJohn > ageMark)
{  // JA Codeblock Anfang
    console.log("John ist älter!");
}
else
{  // NEIN (Alternative zum ersten Codeblock) Codeblock Anfang
    console.log("John ist jünger!");
}