const form = document.getElementById('form');
const messageContainer = document.getElementById('message');

const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

form.addEventListener('submit', (e) =>{

    let messages = [];

    if(emailInput.value === "" || emailInput.value == null){
        messages.push('Invalid email address');
    }

    if(messages.length > 0 ){
        // prevent default form submission
        e.preventDefault();

        messageContainer.innerText = messages.join(' ,');
    }
});