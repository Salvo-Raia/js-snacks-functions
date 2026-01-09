/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */
const userName = "Mario";

// Dichiara la funzione qui.
/**
 * This function returns a greeting message based on the provided name. 
 * @param {string} name the user's actual name to greet.
 * @returns {string} a greeting message.
 */
function welcome (name) {
    return (name) ? (`Ciao ${name}!`) : (`Ciao ospite!`);
}
// Invoca la funzione qui e stampa il risultato in console
console.log(welcome (userName));

//Risultato atteso se si passa 'Mario': // ciao Mario
