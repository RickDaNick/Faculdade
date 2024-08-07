document.addEventListener("DOMContentLoaded", function() {
    const inputNome = document.getElementById("NomeUser");
    const inputEmail = document.getElementById("input_email");
    const inputSenha = document.getElementById("input_senha");
    const inputConfirmaSenha = document.getElementById("input_senhaConfirm");

    const botaoRevelasenha = document.getElementById("RevelarSenhaButton");
    const botaoRevelaConfirmSenha = document.getElementById("RevelarSenhaButtonCONF");

    function cadastrarCliente(e) {
        e.preventDefault();

        const nomeUsuario = inputNome.value.trim();
        const emailUsuario = inputEmail.value.trim();
        const usuarioSenha = inputSenha.value;
        const senhaConfirm = inputConfirmaSenha.value;

        if (!nomeUsuario || !emailUsuario || !usuarioSenha || !senhaConfirm) {
            showError('Preencha todos os campos!');
            return false;
        }

        if (!validateEmail(emailUsuario)) {
            showError('Digite um e-mail válido!');
            return false;
        }

        if (usuarioSenha !== senhaConfirm) {
            showError('As senhas devem ser iguais!');
            return false;
        }

        e.target.submit();
    }

    function showError(message) {
        alert(message); 
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    document.querySelector('form').addEventListener('submit', cadastrarCliente);

    botaoRevelasenha.addEventListener('click', function(e) {
        e.preventDefault();
        togglePasswordVisibility(inputSenha, botaoRevelasenha);
    });

    botaoRevelaConfirmSenha.addEventListener('click', function(e) {
        e.preventDefault();
        togglePasswordVisibility(inputConfirmaSenha, botaoRevelaConfirmSenha);
    });

    function togglePasswordVisibility(input, button) {
        if (input.type === 'password') {
            input.type = 'text';
            button.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash-fill" viewBox="0 0 16 16">
                    <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7 7 0 0 0 2.79-.588M5.21 3.088A7 7 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474z"/>
                    <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12z"/>
                </svg>`;
        } else {
            input.type = 'password';
            button.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
                    <path d="10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/>
                    <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"/>
                </svg>`;
        }
    }
});
