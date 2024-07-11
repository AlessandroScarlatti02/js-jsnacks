// console.log("Hello World!");

//Dichiarazione Variabile totale
let total = 0
//Recupero elemento html
const outElement = document.getElementById("out")
//Richiesta di inserimento numero dall'utente per 10 volte
for (let i = 0; i < 10; i++) {
    const num = parseInt(prompt("Inserisci un numero"))
    //Sommo il numero al tutale
    total = total + num
}
//Stampa totale
outElement.innerHTML = total