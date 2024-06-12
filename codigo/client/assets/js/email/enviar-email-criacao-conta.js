function enviarEmailCriacaoConta(userEmail, username, userPhone) {
    (function () {
        emailjs.init('OUSPzANe0foT3a_36');
    })();

    let emailContent = {
        to: userEmail,
        username: username,
        userPhone: userPhone,
        userEmail: userEmail,
    };

    let serviceID = 'service_jlia9in';
    let templateID = 'template_li0x34j';

    emailjs
        .send(serviceID, templateID, emailContent)
        .then((res) => {
            console.log('E-mail com confirmação de criação de conta enviado.');
        })
        .catch();
}
