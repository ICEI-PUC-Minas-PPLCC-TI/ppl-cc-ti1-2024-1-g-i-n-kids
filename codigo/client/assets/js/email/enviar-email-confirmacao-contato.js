function enviarEmailConfirmacaoContato(userEmail, username, message) {
    (function () {
        emailjs.init('ubr4lcigzJRJxw53P');
    })();

    let emailContent = {
        to: userEmail,
        username: username,
        message: message,
        userEmail: userEmail,
    };

    let serviceID = 'service_1o6b0xx';
    let templateID = 'template_krb6flw';

    emailjs.send(serviceID, templateID, emailContent);
}
