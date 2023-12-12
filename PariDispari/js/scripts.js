/*
    Pari e Dispari
    L'utente sceglie pari o dispari e inserisce un numero da 1 a 5.
    Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
    Sommiamo i due numeri
    Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
    Dichiariamo chi ha vinto.
*/

// Creo la funzione che mi genera un numero random tra min e max
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Creo la funzione che verifica se la somma di due numeri è pari o dispari
function oddEven(x, y){
    let sum = x + y;
    if (sum % 2 == 0){
        return true;
    }
    else {
        return false
    }
}

// Creo evento che al click mi da il risultato
const myButton = document.querySelector('button');
myButton.addEventListener('click', function(){
    const even = document.getElementById('even');
    const odd = document.getElementById('odd');
    const myP = document.querySelector('p')
    const userNumber = parseInt(document.getElementById('user-number').value);

    // Uso la funzione per creare un numero random tra 1 e 5
    const numeroRandom = randomNumber(1, 5);

    // Uso la funzione per definire se è pari o dispari
    const result = oddEven(numeroRandom, userNumber);
    const resultNumber = userNumber + numeroRandom;

    if (result && even.selected){
        console.log('Hai vinto')
        myP.innerHTML = `Hai selezionato pari ed'è uscito ${resultNumber} quindi hai vinto!`;
    }
    else if (result == false && odd.selected) {
        console.log('Hai vinto')
        myP.innerHTML = `Hai selezionato dispari ed'è uscito ${resultNumber} quindi hai vinto!`;

    }
    else if (result == false && even.selected){
        console.log('Hai perso')
        myP.innerHTML = `Hai selezionato pari ed'è uscito ${resultNumber} quindi hai perso!`;
    }
    else if (result && odd.selected){
        myP.innerHTML = `Hai selezionato dispari ed'è uscito ${resultNumber} quindi hai perso!`;

    }
    else {
        myP.innerHTML = `Seleziona pari o dispari`;

    }
    

})