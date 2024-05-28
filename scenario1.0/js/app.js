window.onload = function() {
    let emailState=false;
    let emailModal = document.
    getElementsByClassName('email-modal')[0];

    let closeModal = document.
    getElementsByClassName('email-modal__close-btn')[0]

    closeModal.addEventListener('click', () => {
        emailModal.classList.remove('email-modal--visible')

    });
    console.log(closeModal);

    console.log(emailModal)
    
    document.body.addEventListener('mouseleave', () => {
        if(emailState == false) {
        emailModal.classList.add('email-modal--visible')
        console.log('mouse left')
        }
    });

   
    console.log(document)
}