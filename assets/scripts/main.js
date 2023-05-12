// Creo l'array vuoto e ci pusho dentro 5 numeri random
let numeriCasuali = [];
for (let i = 0; i < 5; i++) {
    numeriCasuali.push(Math.floor(Math.random() * 100) + 1);
}

// Creo il display a schermo dei 5 numeri
let displayNumeri = document.createElement("div");
displayNumeri.innerHTML = "Vai, memorizza: " + numeriCasuali.join(", ");
document.body.appendChild(displayNumeri);

// Time-out function
setTimeout(function() {
    displayNumeri.remove();
    checkNumeri();
}, 2000);


// Funzione checkNumeri
function checkNumeri() {
    // Creo il form (potrebbe essere una function a parte)
    let form = document.createElement("form");
    for (let i = 0; i < 5; i++) {
        // Creo 5 labels e 5 inputs
        let label = document.createElement("label");
        label.innerHTML = "Inserisci il " + (i + 1) + "° numero: ";
        let input = document.createElement("input");
        input.type = "number";
        form.appendChild(label);
        form.appendChild(input);
    }
    // Creo il button
    let button = document.createElement("button");
    button.type = "button";
    button.innerHTML = "Invia";
    // Addeventlistener del button
    button.addEventListener("click", 
        function() {
            // Creo una stringa vuota e ci inserisco i value inseriti dall'utente negli input
            let numeriInseritiDaUtente = [];
            for (let i = 0; i < 5; i++) {
                numeriInseritiDaUtente.push(parseInt(form.elements[i].value));
            }
            // Creo una stringa vuota e controllo se ci sono riscontri tra i numeri casuali e i numeri inseriti dall'utente
            let numeriIndovinati = [];
            for (let i = 0; i < 5; i++) {
                if (numeriCasuali.includes(numeriInseritiDaUtente[i])) {
                    numeriIndovinati.push(numeriInseritiDaUtente[i]);
                }
            }
            // Faccio il display del risultato a schermo
            let displayRisultato = document.createElement("div");
            displayRisultato.innerHTML = "Hai indovinato " + numeriIndovinati.length + " numeri: " + numeriIndovinati.join(", ");
            document.body.appendChild(displayRisultato);
        }
    );
    form.appendChild(button);
    document.body.appendChild(form);
}