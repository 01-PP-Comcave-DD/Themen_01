

/*** Rechner */
/*
0. a+b | a-b | a*b | a/b  --> Ergebnis c 

1. Dateneingabe + -überprüfung :  
2. Auswahl Rechenart : 
3. Fkt (Funktionen). Grundrechenarten : 
4. Ausgabe in Konsole : !check!
*/



// module: addition a + b |  test:
// output(addi(2,2));
// output(addi(2,-2));
// output(addi(2,0));
function addi(a,b) {
	return a + b
}


// module: subtraction a - b |  test:
// output(subt(3,2));
// output(subt(3,-2));
// output(subt(3,0));
// output(subt(0,2));
function subt(a,b) {
	return a - b
}


// module: multiplikation a * b | test:
// output(multi(3,2));
// output(multi(3,-2));
// output(multi(3,0));
// output(multi(6,5));
function multi(a,b) {
	return a * b
}


// module: division a / b | test:
output(divi(3,2));
output(divi(3,-2));
output(divi(3,0));
output(divi(6,2));
output(divi(0,0));
function divi(a,b) {

	// if (b !== 0) {							// Frage nach der Regel "wenn b=0, dann ......"
	// 	return a / b;
	// } else {
	// 	return "Sry Großer, durch 0 kannst nicht teilen!"
	// }

	// if (b == 0) {						     	// Frage nach der Regel "wenn b "ungleich"0, dann ......"
	// 	return "Sry Großer, durch 0 kannst nicht teilen";
	// } else {
	// 	return a / b;
	// }

	if (b == 0) {						     	// Frage nach der Regel "wenn b "ungleich" 0, dann ......, ohne else"
		return "Sry Großer, durch 0 kannst nicht teilen";
	}

		return a / b;
	}





// module: output | test:
// output("hello");
// output(2);
function output(outputData) {
	console.log(outputData);
}
  