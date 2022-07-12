const parioDispari = prompt("Scegli pari o dispari");
const sceltaNumerogiocatore = parseInt(prompt("scrivi un numero da 1 a 5"));
const sceltaNumeroComputer = getRandomIntInclusive(1,5);
const numero = alert(sceltaNumeroComputer);
const sommaNumeri = sceltaNumerogiocatore + sceltaNumeroComputer;

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

if (sommaNumeri % 2 == 0) {
  alert(sommaNumeri + " è pari");
}
else {
  alert(sommaNumeri + " è dispari");
}