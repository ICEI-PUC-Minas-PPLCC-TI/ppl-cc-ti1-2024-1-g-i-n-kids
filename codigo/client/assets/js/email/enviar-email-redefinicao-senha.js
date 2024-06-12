function enviarEmailRedefinicaoSenha(userEmail, username, temporaryPassword) {
    (function () {
        emailjs.init('ubr4lcigzJRJxw53P');
    })();

    let emailContent = {
        to: userEmail,
        username: username,
        temporaryPassword: temporaryPassword,
    };

    let serviceID = 'service_1o6b0xx';
    let templateID = 'template_7dqkgv9';

    emailjs
        .send(serviceID, templateID, emailContent)
        .then((res) => {
            displayMessage(
                'E-mail com informações sobre a redefinição de senha enviado.',
                'success'
            );
        })
        .catch();
}
