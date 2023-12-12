/*
    Pari e Dispari
    L'utente sceglie pari o dispari e inserisce un numero da 1 a 5.
    Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
    Sommiamo i due numeri
    Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
    Dichiariamo chi ha vinto.
*/

const scelta = prompt('Scegli pari o dispari');
const userNumber = parseInt(prompt('Inserisci il tuo numero'));
console.log('Hai scelto: ', scelta, typeof scelta);


function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



function oddEven(x, y){
    let sum = x + y;
    if (sum % 2 == 0){
        return true;
    }
    else {
        return false
    }
}

let numeroRandom = randomNumber(1, 5);
console.log('Numero pc', numeroRandom, typeof numeroRandom);
console.log('Tuo numero', userNumber, typeof userNumber);

const result = oddEven(numeroRandom, userNumber);
console.log('Il risultato è :', result, typeof result)
if (result){
    console.log('E\' pari')
}
else {
    console.log('E\' dispari')
}

if (result && scelta == 'pari'){
    console.log('Hai vinto')
}
else {
    console.log('Hai perso')
}