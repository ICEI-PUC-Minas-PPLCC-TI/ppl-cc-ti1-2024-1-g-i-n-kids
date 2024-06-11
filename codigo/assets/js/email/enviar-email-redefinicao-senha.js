function enviarEmailRedefinicaoSenha(userEmail, username, temporaryPassword) {
    (function () {
        emailjs.init('OUSPzANe0foT3a_36');
    })();

    let emailContent = {
        to: userEmail,
        username: username,
        temporaryPassword: temporaryPassword,
    };

    let serviceID = 'service_jlia9in';
    let templateID = 'template_bdax1vn';

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
