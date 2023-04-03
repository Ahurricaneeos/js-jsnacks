/* Jsnack2:
L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga */


let firstWord = prompt("Inserisci una parola:");
let secondWord = prompt("Inserisci un'altra parola");

if (firstWord > secondWord)
    console.log(secondWord + " " + firstWord);
else {(firstWord < secondWord)
    console.log(firstWord + " " + secondWord);
}