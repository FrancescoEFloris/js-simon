
// Generatore numeri random da ricordare
function generaNumeri() {
    for (let i = 0; i < 5; i++) {
        // - genero numer random
        let numeroRandom = Math.ceil(Math.random() * 50);

        // - se il numero random è già presente nella lista
        //   ne genero un altro, se non è presente lo aggiungo
        if (numeriGenerati.indexOf(numeroRandom) === -1) {
            numeriGenerati.push(numeroRandom);
        } else {
            i--;
        }
    }
}

// Tempo rimasto per memorizzare i numeri
function timer() {
    if (tempoRimasto > 0) {
        tempoRimasto--;
        countdown.innerHTML = `Tempo rimasto: ${tempoRimasto} secondi`;
        // console.log(tempoRimasto);
        setTimeout(timer, 1000);
    } else {
        countdown.innerHTML = "Inserisci i numeri che ricordi!";
        listaNumeri.classList.add("d-none");
        formUtente.classList.remove("d-none");
    }
}

// Salva i dati inseriti dall'utente


