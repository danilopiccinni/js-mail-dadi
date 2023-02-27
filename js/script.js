let emails =['asd@asd.it' , 'lol@lol.it' , 'gol@gol.it']

console.log (emails)

let consentito = false
let emailpresente;

let buttonEl = document.getElementById('bottone-controllo')

buttonEl.addEventListener('click' , function() {

    let inputEl = document.getElementById('e-mail')

    let emailEl = inputEl.value

    for ( i=0 ; i < emails.length ; i++) {

        if (emailEl == emails[i]) {
            consentito = true
            emailpresente = i
        }
    }

    if (consentito == false) {
        alert('accesso negato')
    } 
    else {
        alert('accesso consentito... ' + 'Benvenuto ' + emails[emailpresente])
        consentito =false
    }
})


// ----------------------------------------

let numeroUtente;
let numeroBot;
let numeroUtenteEl = document.getElementById ('numero-utente')
let numeroBotEl = document.getElementById ('numero-bot')
let vincitoreEl = document.getElementById ('vincitore') 
vincitoreEl.style.width='250px'

let buttonLanciEl = document.getElementById('bottone-lancio')

buttonLanciEl.addEventListener('click' , function() {

    numeroUtente= Math.floor(Math.random() * 6 + 1)

    numeroUtenteEl.value = numeroUtente

    numeroBot = Math.floor(Math.random() * 6 + 1 )

    numeroBotEl.value =numeroBot

    console.log (numeroUtente)
    console.log (numeroBot)

    if (numeroUtente > numeroBot) {
        vincitoreEl.value = "vittoria dell'utente con il " + numeroUtente
    } else if (numeroUtente < numeroBot) {
        vincitoreEl.value = "vittoria del computer con il " + numeroBot
    }
    else { 
        vincitoreEl.value = 'pareggio'
    }

})