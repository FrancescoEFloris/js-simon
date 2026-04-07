
// Generatore numeri random da ricordare

function generaNumeri() {
    for (let i = 0; i < 5; i++) {
        // - genero numer random
        let numeroRandom = Math.ceil(Math.random() * 100);

        // - se il numero random è già presente nella lista
        //   ne genero un altro, se non è presente lo aggiungo
        if (numeriGenerati.indexOf(numeroRandom) === -1) {
            numeriGenerati.push(numeroRandom);
        } else {
            i--;
        }
    }
}

