const LABEL = document.querySelector('label')
const INPUT = document.querySelector('input')
const SUBMIT = document.querySelector('.submit')
const ALERT_IMG = document.querySelector('.alert')
const ALERT_MESSAGE = document.querySelector( '.alert__info' )

// aby usunąć labelke 
// uzywamy opacity
INPUT.addEventListener( 'keyup', checkingIfInputHasText ) 

function checkingIfInputHasText() {
    if ( INPUT.value ) {
        LABEL.style.opacity = 0 
    } else {
        LABEL.style.opacity = 1 
        INPUT.style.border = ( '1px solid var(--Desaturated-Red)')
        ALERT_IMG.classList.add( 'hidden' )
        ALERT_MESSAGE.classList.add( 'hidden' )
    }
}

SUBMIT.addEventListener( 'click', checkingForValidEmail )
// document.querySelector('.logo--img').addEventListener( 'click', checkingForValidEmail )

function checkingForValidEmail() {
    if ( !INPUT.value.includes( '@gmail.com' ) && !INPUT.value.includes( '@o2.pl' ) &&  !INPUT.value.includes( '@poczta.fm' )) 
    // ( INPUT.value.includes( '@gmail.com' )==false && INPUT.value.includes( '@o2.pl' )==false &&  INPUT.value.includes( '@poczta.fm' )==false ) 
    { 
        ALERT_IMG.classList.remove( 'hidden' )
        ALERT_MESSAGE.classList.remove( 'hidden' )
        INPUT.style.border = ( '2px solid var(--Soft-Red)')
    } else {
        INPUT.style.border = ( '1px solid var(--Desaturated-Red)')
        ALERT_IMG.classList.add( 'hidden' )
        ALERT_MESSAGE.classList.add( 'hidden' )
    }
}