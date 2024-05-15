
/* Die Satzbau-Maschine | Arrays */

/**
 *   THEORIE
 * 
 */
let arr;
// arr = new Array();           // Konstruktor
// arr = [];
arr = [2,5,8,6,11,25,30,8]      // Array mit Elementen (beliebig viel)

output(arr);
output(arr.length);             // Anzahl der Elemente
output(arr[0])                  // Index 0 (0=1) beginnt also bei 0, nicht bei 1
output(arr[4])                  // Index 4 ist in diesem Beispiel die letzte Zahl(Element)
output(arr[arr.length-1])       // zeigt nun "automatisch" die letzte zahl an





/**
 *   PRAXIS
 * 
 */


/*** 01. Funktionalität mit Einzelparametern */
// --> "Ich bin Max Mütze."
// output(getSentence("Ich","bin","Max","Mütze"));
// output(getSentence("Ich","bin","die","coole","Maxine","Mützerich"));
function getSentence(word1,word2,word3,word4,word5,word6) {
    const GAP = " ";
    const PUNCT = ".";
    let str =   word1 + GAP +
                word2 + GAP +
                word3 + GAP +
                word4 + GAP +
                word5 + GAP +
                word6 +
                PUNCT;

    return str;
}




// Modul: Ausgabe in Konsole : Test
// output("hi"); 
function output(outputStr) {
    console.log(outputStr);
}


