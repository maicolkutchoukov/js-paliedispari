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
  
const myWord = document.getElementById('word').value;

const myButton = document.querySelector('button');
myButton.addEventListener('click', function(){
    const myWord = document.getElementById('word').value.toLowerCase();
    console.log(myWord);
    const isPalindroma = isPalindrom(myWord);
    console.log("La parola è palindroma?", isPalindroma);
    let risultato = document.querySelector('p');
    if (isPalindroma){
        risultato.innerHTML = 'La parola inserita è un palindromo';
    }
    else {
        risultato.innerHTML = 'La parola inserita non è un palindromo';

    }
})
