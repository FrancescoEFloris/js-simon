// Numeri da ricordare
let numeriGenerati = [];
let listaNumeri = document.querySelector("#numbers-list");
// Numeri dell'utente
let numeriUtente = [];
let numeriCorretti = [];
let formUtente = document.querySelector("#answers-form");
let inputUtente = document.querySelectorAll(".form-control");;
// Timer
let countdown = document.querySelector("#countdown");
let tempoRimasto = 3;
// Messaggio punteggio
let numGiusti = document.querySelector("#message");

generaNumeri();
listaNumeri.innerHTML = `
  <li>${numeriGenerati[0]}</li>
  <li>${numeriGenerati[1]}</li>
  <li>${numeriGenerati[2]}</li>
  <li>${numeriGenerati[3]}</li>
  <li>${numeriGenerati[4]}</li>
  `;
console.log(numeriGenerati);

timer();

formUtente.addEventListener("submit", salvaDatiUtenteHandler);


