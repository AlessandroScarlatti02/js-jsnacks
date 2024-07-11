// console.log("Hello World!");

//Richiesta di inserimento di 2 numeri all'utente
const num1 = parseInt(prompt("Insierisci un numero"))
const num2 = parseInt(prompt("Inserisci un altro numero"))
//Recupero elemento dall'html
const numElement = document.getElementById("num")
//controllo di quale numero è più grande e stampa del maggiore
if (num1 > num2) {
    numElement.innerHTML = num1
}
else if (num1 < num2) {
    numElement.innerHTML = num2
}
else {
    numElement.innerHTML = "I numeri sono uguali"
}