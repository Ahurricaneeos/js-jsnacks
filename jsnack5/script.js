/* Jsnack5:
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array. Stampa l'array alla fine. */

let oddNumbers = new Array();
let evenNumbers = new Array();

for (let i = 0; i <= 6; i++){
  numbers = parseInt(prompt("Inserisci un numero:"));
  if (numbers % 2 == 0) {
    evenNumbers(numbers.push);
  } else {
    oddNumbers(numbers.push);
  }
}

console.log(oddNumbers.length);

/* Is not a function */