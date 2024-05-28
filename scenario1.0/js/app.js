window.onload = function() {
    let emailState = false;

    let emailModal = document.
    getElementsByClassName('email-modal')[0];

    let closeModal = document.
    getElementsByClassName('email-modal__close-btn')[0];

    let emailInput = document.
    getElementsByClassName('email-modal__input')[0];

    let emailButton = document.
    getElementsByClassName('email-modal__button')[0];

    function emailIsValid (email) {
        return /\S+@\S+\.\S+/.test(email)
      }
    
    emailButton.addEventListener('click', () => {
        if(emailIsValid(emailInput.value)) {
            console.log(emailInput.value)
        }
        else {
        alert('this is not a valid email')
        }
    })

    let showModal = () => {
        if(emailState == false) {
            emailModal.classList.add('email-modal--visible');
            emailState = true
            
        }
    }
    
    closeModal.addEventListener('click', () => {
        emailModal.classList.remove('email-modal--visible')

    });
    console.log(closeModal);

    console.log(emailModal)
    
    document.body.addEventListener('mouseleave', () => {
        showModal();
    });

   
   
}