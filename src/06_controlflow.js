// Entscheidungsstrukturen | control flow

// Deklaration + Assignment
// const ageJohn = 30;
// const ageMark = 30;

// // Deklaration
// let isJohnOlder, isJohnEqual;

// // Test | Logische Aussage
// isJohnOlder = (ageJohn > ageMark);
// isJohnEqual = (ageJohn == ageMark);

// // Ausgabe
// console.log("ageJohn: " + ageJohn);
// console.log("ageMark: " + ageMark);
// console.log("isJohnOlder: " + isJohnOlder);
// console.log("isJohnEqual: " + isJohnEqual);
// console.log("------------------");

/************ IF  ************/
// TINA --> There is no alternative!
// entweder JA oder nix ... alternativlos
// Türsteher-Politik (Doors 10 p.m.)

// if (false)  // fake it! nur zum test
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
// if(ageJohn > ageMark)
// {  // JA Codeblock Anfang
//    console.log("John ist älter!");
// }
// else
// {  // NEIN (Alternative zum ersten Codeblock) Codeblock Anfang
//    console.log("John ist jünger!");
// }


/************ IF - ELSE IF  ************/
// mit alternativen Fällen (älter, jünger, gleich alt)

//  if(isJohnOlder) //Test
// {  // JA Codeblock Anfang
//     console.log("John ist älter!");
// }
// else if (isJohnEqual)
// {  // alternative zu Codeblock 1
//     console.log("Beide sind gleich alt!");
// }
//  else
// {  // gemeinsame Alternative zwischen Codeblock 1 und 2 Codeblock Anfang
//     console.log("John ist jünger!");
// }

//----------------------------------------------------------//
/****** Fallunterscheidung / SWITCH|CASE 1 ******/

const firstName = "Jane";
let job;

job = "driver";          // .. fährt TAXI! / UBER
job = "diver";           // .. taucht im Wasser!
job = "artist";          // .. malt ein Bild!
job = "pilot";           // .. macht etwas anderes! --> default
job = "teacher";         // .. unterrichtet!
job = "instructor";      // .. unterrichtet!

switch (job)
{
    case "driver":       //Test auf Gleichheit
        console.log(firstName + ".. fährt TAXI");
        break;
    case "diver":        //Test auf Gleichheit
        console.log(firstName + ".. taucht im Wasser");
        break;
    case "artist":       //Test auf Gleichheit
        console.log(firstName + ".. malt ein Bild");
        break;
    case "teacher":      //Test auf Gleichheit
    case "instructor":   //Test auf Gleichheit
        console.log(firstName + ".. unterrichtet");
        break;







    default:              //Wichtig --> default
        console.log(firstName + ".. macht etwas anderes");
        break;
}