

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



let unoEl = document.getElementById ('uno')
let dueEl = document.getElementById ('due')
let treEl = document.getElementById ('tre')
let quattroEl = document.getElementById ('quattro')
let cinqueEl = document.getElementById ('cinque')
let seiEl = document.getElementById ('sei')

let dadi = [unoEl , dueEl , treEl , quattroEl , cinqueEl , seiEl]
console.log (dadi)

let buttonLanciEl = document.getElementById('bottone-lancio')

buttonLanciEl.addEventListener('click' , function() {

    for (i = 0 ; i < 6 ; i++) {
        dadi [i].classList.add ('d-none')
    }
    
    numeroUtente= Math.floor(Math.random() * 6 + 1)

    numeroUtenteEl.value = numeroUtente

    dadi[numeroUtente - 1].classList.remove ('d-none')

    numeroBot = Math.floor(Math.random() * 6 + 1 )
    dadi[numeroBot - 1].classList.remove ('d-none')

    numeroBotEl.value = numeroBot

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