/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];
const selectLetter = prompt("Scrivi un'iniziale", "M")

// Dichiara la funzione qui.
function FirstDigitFilter (names) {
    let filteredNames = []
    for (i = 0; i < names.length; i++) {
    let currentName = names; 
    if (currentName[i].charAt(0) == selectLetter) {
        filteredNames.push(names[i])
    }
} return filteredNames
}

// Invoca la funzione qui e stampa il risultato in console



//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]