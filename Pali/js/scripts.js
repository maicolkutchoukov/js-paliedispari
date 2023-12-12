/*
    Chiedere all'utente di inserire una parola
    Creare una funzione per capire se la parola inserita è palindroma
*/


// .split("")               crea un'array dei caratteri contenuti nella parola
// .reverse()               inverte l'ordine dell'array
//.join("")                 restituisce un array sotto forma di stringa

function isPalindrom(word) {
    const wordReverse = word.split("").reverse().join("");
    if (word === wordReverse){
        return true
    }
    return false
}
  
const myWord = prompt('Inserisci una parola');

const isPalindroma = isPalindrom(myWord);
  
console.log("La parola è palindroma?", isPalindroma);