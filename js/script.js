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

function sePariDispari(number) {
    // restituirà una stringa, o "pari" o "dispari"

    if(number % 2 == 0) {
        // pari
        return "pari";
    } else {
        return "dispari";
    }
}

console.log(computerButtaNumero());

// Evento al click

buttonElement.addEventListener("click", 
    function() {

        // Input Utente
        const sceltaPariDispariUtente = document.getElementById("scelta-utente-pd").value.toLowerCase();
        const sceltaNumeroUtente = Number(document.getElementById("numero-utente-pd").value);

        // NUMERO RANDOM COMPUTER
        const numeroRandom = computerButtaNumero();

        // Controllo se inserisce la parola corretta
        if(sceltaPariDispariUtente != "pari" && sceltaPariDispariUtente != "dispari") {
            
    
            alert('Hai inserito un valore sbagliato nella scelta, inserisci o "pari" o "dispari"')
    
        } else {

            // controllo il numero
            if (isNaN(sceltaNumeroUtente) || sceltaNumeroUtente < 1 || sceltaNumeroUtente > 5) {

                alert("Numero sbagliato, inserisci un valore tra 1 e 5");

            } else {

                // faccio somma dei 2 numeri
                const somma = numeroRandom + sceltaNumeroUtente;

                // Controllo se la somma è pari o dispari
                const outcome = sePariDispari(somma);

                if (sceltaPariDispariUtente === outcome)  {

                    const hiddenElelement = document.querySelector(".father-output div");
                    hiddenElelement.classList.remove("d-none");
                    const newElement = document.createElement("div");
                    outputElement.append(newElement);
                    newElement.innerHTML = `Hai Vinto!<br> Tu hai scelto ${sceltaPariDispariUtente} e hai buttato ${sceltaNumeroUtente} <br> il Computer ha buttato ${numeroRandom}`;

                } else {

                    const hiddenElelement = document.querySelector(".father-output div");
                    hiddenElelement.classList.remove("d-none");

                    const newElement = document.createElement("div");
                    outputElement.append(newElement);
                    newElement.innerHTML = `<strong>Hai Perso!</strong> <br> Tu hai scelto ${sceltaPariDispariUtente} e hai buttato ${sceltaNumeroUtente} <br> il Computer ha buttato ${numeroRandom}`;

                }
            }

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

    // per riempire l'array con le lettere di una parola
    for (let i = 0; i < parolapal.length; i++) {
        arrayWithLetters.push(parolapal[i])
    }

    // stessa cosa per Array sosia
    for (let i = parolapal.length - 1; i >= 0 ; i--) {
        arraySosia.push(parolapal[i])
    }

    // Corrispondenza due Array 
    for ( let i = 0; i < arraySosia.length; i++) {
        if (arrayWithLetters[i] !== arraySosia[i]) {
            return false;
        }
    }

    return true;
}


// Evento al click

PalButtonElement.addEventListener("click", 
    function() {

        // Input Utente
         const parolaUtente = document.getElementById("parola-palindroma").value;

        // verifico se parola utente è palindroma
        if (checkParola(parolaUtente)) {
            const hiddenElelement = document.querySelector("#results-palindroma");
            hiddenElelement.classList.remove("d-none");
            
            const newElement = document.createElement("div");
            PalOutputElement.append(newElement);
            newElement.innerHTML = `${parolaUtente} è una parola palindroma`;

        } else {
            const hiddenElelement = document.querySelector("#results-palindroma");
            hiddenElelement.classList.remove("d-none");

            const newElement = document.createElement("div");
            PalOutputElement.append(newElement);
            newElement.innerHTML = `${parolaUtente} non è una parola palindroma`;
            
        }
        
    }
);
