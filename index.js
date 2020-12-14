const form = document.getElementById('form');
const messageContainer = document.getElementById('message');

const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

form.addEventListener('submit', (e) =>{

    let messages = [];

    // email vaidation

    if(emailInput.value === "" || emailInput.value == null && passwordInput.value.length <= 6 || passwordInput.value === ""){
        messages.push('Invalid email address');
        messages.push('Password must be ateast 8 characters');

        emailInput.value = ''
        passwordInput.value = ''
    }

    if(messages.length > 0 ){
        // prevent default form submission
        e.preventDefault();

        messageContainer.innerText = messages.join(' ,');
    }

    // // password validation
    // if(passwordInput.value.length <= 6 || passwordInput.value === ""){
    //     messages.push('Password must be ateast 8 characters');
    // }
});