// PARI E DISPARI

// Mi salvo Button
const buttonElement = document.getElementById("button-pd");

// Mi salvo output
const outputElement = document.getElementById("results-pari-dispari");

// Genero Numero Random Computer con function

function computerButtaNumero() {
    const numeroComputer = Math.floor(Math.random() * 5) +1;

    return numeroComputer;
}

console.log(computerButtaNumero());

// Evento al click

buttonElement.addEventListener("click", 
    function() {

        // Input Utente
        const sceltaPariDispariUtente = (document.getElementById("scelta-utente-pd").value);
        const sceltaNumeroUtente = Number(document.getElementById("numero-utente-pd").value);

        // NUMERO RANDOM COMPUTER
        const numeroRandom = computerButtaNumero();

        // faccio somma dei 2 numeri
        const somma = numeroRandom + sceltaNumeroUtente;

        if ((sceltaPariDispariUtente === "pari" && somma % 2 == 0 ) || (sceltaPariDispariUtente === "dispari" && somma % 2 != 0))   {
            const newElement = document.createElement("div");
            outputElement.append(newElement);
            newElement.innerHTML = `Hai Vinto!<br> Tu hai scelto ${sceltaPariDispariUtente} e hai buttato ${sceltaNumeroUtente} <br> il Computer ha buttato ${numeroRandom}`;
        } else {
            const newElement = document.createElement("div");
            outputElement.append(newElement);
            newElement.innerHTML = `<strong>Hai Perso!</strong> <br> Tu hai scelto ${sceltaPariDispariUtente} e hai buttato ${sceltaNumeroUtente} <br> il Computer ha buttato ${numeroRandom}`;
        }
    }
);

// PAROLA PALINDROMA 

// Mi salvo Button
const PalButtonElement = document.getElementById("button-palindromo");

// Mi salvo output
const PalOutputElement = document.getElementById("results-palindroma");

// dichiaro l'array
let arrayWithLetters;

function checkParola (parolapal) {
    // dico che è un array vuoto
    arrayWithLetters = [];

    // mi creo un array sosia
    arraySosia = [];

    let corrispondenza = true;

    // per riempire l'array con le lettere di una parola
    for (let i = 0; i < parolapal.lenght; i++) {
        arrayWithLetters.push(parolapal[i])
    }

    // stessa cosa per Array sosia
    for (let i = parolapal.lenght; i >= 0 ; i--) {
        arraySosia.push(parolapal[i])
    }

    // Corrispondenza due Array 
    for ( let i = 0; i < arrayWithLetters.length; i++) {
        if (arrayWithLetters[i] !== arraySosia[i]) {
            corrispondenza = false;
        }
    }

    return corrispondenza;
}


// Evento al click

PalButtonElement.addEventListener("click", 
    function() {

        // Input Utente
         const parolaUtente = document.getElementById("parola-palindroma").value;

        // verifico se parola utente è palindroma
        if (checkParola(parolaUtente)) {
            
            const newElement = document.createElement("div");
            PalOutputElement.append(newElement);
            newElement.innerHTML = `${parolaUtente} è una parola palindroma`;

        } else {

            const newElement = document.createElement("div");
            PalOutputElement.append(newElement);
            newElement.innerHTML = `${parolaUtente} non è una parola palindroma`;
            
        }
        
    }
);
