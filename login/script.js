const inputSenha = document.querySelector('#senha-text');
const icone = document.querySelector('.container__inputs__imagem');

icone.addEventListener('click', function() {
    if (inputSenha.type === 'password') {
        inputSenha.type = 'text';
        icone.src = 'assets/olho-aberto.svg';
    } else {
        inputSenha.type = 'password';
        icone.src = 'assets/olho-fechado.svg';
    }
});