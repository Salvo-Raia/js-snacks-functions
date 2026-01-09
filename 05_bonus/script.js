/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';
const now = new Date ();
const hours = now.getHours();
console.log(now);


// Dichiara la funzione qui.

/**
 * This function allows you to get a customized greet based on time-clock
 * @param {date} hours a date\hour value
 * @returns {string} a customized string
 */
function clockGreet (hours) {
    let saluto = ""; 
    if (hours <= 13) {
        saluto = "Buongiorno,"
    } else if (hours <= 17) {
        saluto = "Buon pomeriggio,"
    } else {
        saluto = "Buonasera,"
    } 
    return saluto; 
} 

// Invoca la funzione qui e stampa il risultato in console
console.log(clockGreet(hours), name);


//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.