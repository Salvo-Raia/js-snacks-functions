/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */
const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];
const letter = prompt("Inserisci un'iniziale", "A").toUpperCase()

// Dichiara la funzione qui.
/**
 * This function allow you to generate a new array with just the names starting with the prompted character.
 * @param {Array} names an array of names. 
 * @param {*} letter a prompt for the first character.
 * @returns returns just the name starting with the character prompted by user.
 */
function FirstDigitFilter (names, letter) {
    let filteredNames = []
    for (i = 0; i < names.length; i++) {
    let currentName = names; 
    if (currentName[i].charAt(0) == letter) {
        filteredNames.push(names[i])
    }
} return filteredNames
}

// Invoca la funzione qui e stampa il risultato in console
console.log(FirstDigitFilter(names, letter));

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]