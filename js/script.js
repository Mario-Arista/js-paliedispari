// Mi salvo Button
const buttonElement = document.getElementById("button-pd");

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
            console.log("Hai vinto");
        } else {
            console.log("Hai perso");
        }
    }
);

