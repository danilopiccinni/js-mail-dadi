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