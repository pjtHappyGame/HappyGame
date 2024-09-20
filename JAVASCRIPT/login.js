document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('login-form');
    const passwordInput = document.getElementById('input-password');
    const togglePasswordButton = document.getElementById('toggle-password');
    const generatePasswordButton = document.getElementById('generate-password');

    form.addEventListener('submit', (e) => {
        const username = document.getElementById('username').value;
        const password = passwordInput.value;
        const captchaText = document.getElementById('captcha').textContent;
        const captchaInput = document.getElementById('captcha-input').value;

        if (captchaInput !== captchaText) {
            e.preventDefault();
            alert('CAPTCHA incorreto. Tente novamente.');
            generateCaptcha();
        } else if (username && password) {
            e.preventDefault(); // Remove this line when integrating with backend authentication
            console.log(`Usuário: ${username}, Senha: ${password}`);
            alert(`Logado com Sucesso, Seja Bem vindo ${username}`);
            window.location.href='../HTML/HOME.html'

        }
    });

    togglePasswordButton.addEventListener('click', () => {
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            togglePasswordButton.textContent = 'Ocultar';
        } else {
            passwordInput.type = 'password';
            togglePasswordButton.textContent = 'Mostrar';
        }
    });

    generatePasswordButton.addEventListener('click', () => {
        const randomPassword = generateRandomPassword(12);
        passwordInput.value = randomPassword;
    });

    function generateRandomPassword(length) {
        const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~|}{[]:;?><./-=";
        let password = "";
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charset.length);
            password += charset[randomIndex];
        }
        return password;
    }

    function generateCaptcha() {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let captchaText = '';
        for (let i = 0; i < 6; i++) {
            captchaText += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        document.getElementById('captcha').textContent = captchaText;
    }

    window.onload = generateCaptcha;
});