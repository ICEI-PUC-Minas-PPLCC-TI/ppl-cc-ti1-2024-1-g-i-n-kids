document
    .getElementById('togglePassword')
    .addEventListener('click', function () {
        const passwordField = document.getElementById('password');
        const type =
            passwordField.getAttribute('type') === 'password'
                ? 'text'
                : 'password';
        passwordField.setAttribute('type', type);
        this.classList.toggle('fa-eye');
        this.classList.toggle('fa-eye-slash');
    });

document
    .getElementById('toggleConfirmPassword')
    .addEventListener('click', function () {
        const confirmPasswordField =
            document.getElementById('confirm-password');
        const type =
            confirmPasswordField.getAttribute('type') === 'password'
                ? 'text'
                : 'password';
        confirmPasswordField.setAttribute('type', type);
        this.classList.toggle('fa-eye');
        this.classList.toggle('fa-eye-slash');
    });
