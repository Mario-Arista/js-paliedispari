// PARI O DISPARI

/* 
L’utente sceglie pari o dispari.
Inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) 
per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è 
pari o dispari (usando una funzione)
Se l'utente ha indovinato l'esito 
(pari o dispari) della somma ha vinto, 
altrimenti ha perso.
*/
// Mi salvo Button
const buttonElement = document.getElementById("button-pd");

// Mi salvo Input Utente
const sceltaUtenteValore = (document.getElementById("numero-utente-pd").value);
const sceltaNumeroValore = Number(document.getElementById("scelta-utente-pd").value);


// Genero Numero Random Computer con function

function computerButtaNumero() {
    const numeroComputer = Math.floor(Math.random() * 5) +1;

    return numeroComputer;
}

const numeroRandom = computerButtaNumero();
console.log(numeroRandom);

// Genero se la somma dei due numeri è pari/dispari

const numeroPari = true;

function checksomma() {

    const somma = computerButtaNumero() + sceltaNumeroValore;

    if (somma % 2 != 0) {
        numeroPari = false;
    } else {
        return numeroPari;
    }

}


// Evento al click

buttonElement.addEventListener("click", 
    function() {


    }
);

