/* Jsnack4:
In un array sono contenuti i nomi degli invitati alla festa del grande
Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o
no alla festa. */


let invitedNames = ["Silvia", "Matteo", "Giorgio", "Andrea", "Laura"];
let userName = prompt("Inserisci il tuo nome:");

if (invitedNames.includes(userName)) {
    console.log("Sei invitato alla festa");
} else {
    console.log("Mi dispiace, non sei invitato");
}