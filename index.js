const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const inputEmail = document.querySelector('#form2Example1');
    const email = inputEmail.value;

    const inputSenha = document.querySelector('#form2Example2');
    const senha = inputSenha.value;

    /* console.log(email + senha); */

});