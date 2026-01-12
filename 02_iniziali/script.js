/* Scrivi una funzione che accetti un array di nomi e restituisca un nuovo array con le iniziali di ogni parola dell'array fornito */
const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];

// Dichiara la funzione qui.

/**
 * This function allow to populate a new array with the first characters of names in a given array.
 * @param {Array} names An array of names from wich the function will select only the first characters.
 * @returns {Array} A new array with just the first character of every name in the original array.
 */
function onlyFirstDigit (names) {
    const firstDigitArray = []; 
    for (i = 0; i < names.length; i++) {
        firstDigitArray.push (names[i].charAt(0))
    }
    return firstDigitArray;    
} 
// Invoca la funzione qui e stampa il risultato in console
console.log(onlyFirstDigit(names));

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]    