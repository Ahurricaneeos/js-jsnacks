/* Jsnack7:
Scrivere un programma che stampi la tabellina del 2, fino al numero 1000.
Modificate poi il programma in modo che venga chiesto all'utente il
numero massimo consentito, e stampare tutta la tabellina del 2 fino al
numero inserito */

userNumber = prompt("Inserisci il numero a cui vuoi arrivare:");
for (let i = 2; i <= userNumber; i=i+2) {
    console.log(i);
}