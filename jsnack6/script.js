/* Jsnack6:
Fate generare un numero random da 0 a 10 al computer, e chiedete
all'utente di inserire un suo numero. Se il numero scelto dall'utente è
uguale al numero del computer informate l'utente che ha vinto, altrimenti
ha perso */

casualNumber = Math.floor(Math.random() * 11);
userNumber = prompt("Inserisci un numero da 1 a 10:");

if (userNumber == casualNumber){
    console.log(casualNumber + " Hai vinto!")
} else {
    console.log(casualNumber + " Hai perso!")
}