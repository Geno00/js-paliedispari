//creo delle variabili per inserire le parole e leggerle in entrambi i lati
const parolaUtente = prompt("Inserisci una parola");
const parolaContrario = roveciaParola(parolaUtente);

//se la parola si legge da entrambi i lati allo stesso modo è palindroma
if (parolaUtente == parolaContrario) {
 alert("La parola è palindroma!");
}else {  //in caso contrario un alert comunicherà che la parola non è palindroma
  alert("La parola non è palindroma!");
}


//questa funzione permette di leggere la parola in entrambi i lati
function roveciaParola(parola) {
 let parolaRovesciata = "";
 for (let i = parola.length -1; i >= 0; i--) {
   parolaRovesciata += parola[i]
 }
 return parolaRovesciata;
}