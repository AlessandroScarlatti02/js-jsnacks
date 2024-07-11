console.log("Hello World!");

//Richiesta all'utente di inserire due parole
const word1 = prompt("Inserisci una parola")
const word2 = prompt("Inserisci un'altra parola")

//Recupero elemento html
const outElement = document.getElementById("out")

//controllo della lunghezza della parola e stampa la più lunga
if (word1.length > word2.length) {
    outElement.innerHTML = word1
}
else if (word1.length < word2.length) {
    outElement.innerHTML = word2
}
else {
    outElement.innerHTML = "Le parole sono lunghe uguali"
}