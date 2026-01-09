/* Scrivi una funzione che accetti un array di nomi e restituisca un nuovo array con le iniziali di ogni parola dell'array fornito */
const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];

// Dichiara la funzione qui.
function onlyFirstDigit (names) {
    firstDigitArray = []; 
    for (i = 0; i < names.length; i++) {
        firstDigitArray.push (names[i].charAt(0))
    }
    return firstDigitArray;    
} 
// Invoca la funzione qui e stampa il risultato in console

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]