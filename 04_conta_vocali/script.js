/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */
const word = 'javascript';
let vowelsFound = []; 

// Dichiara la funzione qui.
function vowelsCounter (word) {
    const vowels = ["a", "e", "i", "o", "u"]
    let vowelsNumber = 0;
    
for (i = 0; i < word.length; i++) {
    currentChar = word[i] 
    if (vowels.includes(word[i])) {
        vowelsNumber += 1
        vowelsFound.push(word[i])
}
} 
return vowelsNumber;
}

// Invoca la funzione qui e stampa il risultato in console
console.log("La parola", word, "contiene", vowelsCounter(word), "vocali, cioè:", vowelsFound);

//Risultato atteso se si passa 'javascript': 3 (a, a, i)