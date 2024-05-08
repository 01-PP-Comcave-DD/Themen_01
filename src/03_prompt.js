// --> installieren mit: npm install prompt-sync

const prompt = require('prompt-sync')({sigint: true}); //require (Anfordern)

// Alles muss man selber machen lassen! ...
let firstName = prompt("Vorname?: ");
let familyName = prompt("Name?: ");
console.log("Hallo, " + firstName + " " + familyName +"!");