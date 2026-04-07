
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
function salvaDatiUtenteHandler(event) {
    event.preventDefault();

    for (let i = 0; i < inputUtente.length; i++) {
        numeriUtente.push(parseInt(inputUtente[i].value));
    }
    console.log("Numeri inseriti dall'utente:", numeriUtente);

    for (let i = 0; i < numeriUtente.length; i++) {
        if (numeriGenerati.indexOf(numeriUtente[i]) !== -1 && numeriCorretti.indexOf(numeriUtente[i]) === -1) {
            numeriCorretti.push(numeriUtente[i]);
        }

    }
    numGiusti.innerHTML = `Hai ricordato ${numeriCorretti.length} numeri ${numeriCorretti}`;
    numGiusti.classList.remove("d-none");
    console.log("Numeri corretti:", numeriCorretti);
}


