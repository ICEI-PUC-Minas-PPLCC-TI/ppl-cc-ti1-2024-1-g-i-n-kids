function enviarEmailExclusaoConta(userEmail, username) {
    (function () {
        emailjs.init('KPAPWpM_ygfsRm5D6');
    })();

    let emailContent = {
        to: userEmail,
        username: username,
    };

    let serviceID = 'service_fhaa9vs';
    let templateID = 'template_ktjq9t6';

    emailjs
        .send(serviceID, templateID, emailContent)
        .then((res) => {
            console.log('E-mail com confirmação de exclusão de conta enviado.');
        })
        .catch();
}
