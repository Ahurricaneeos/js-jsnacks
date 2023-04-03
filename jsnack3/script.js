/* Jsnack3:
Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti. */


somma = new Array();

for (let i = 0; i <= 10; i++){
let userNumbers = parseInt(prompt("Inserisci 10 numeri:"));
let somma = userNumbers + (i);
console.log(somma);
}
