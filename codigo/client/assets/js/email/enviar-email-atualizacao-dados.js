function enviarEmailAtualizacaoConta(userEmail, username, userPhone) {
    (function () {
        emailjs.init('KPAPWpM_ygfsRm5D6');
    })();

    let emailContent = {
        to: userEmail,
        username: username,
        userPhone: userPhone,
        userEmail: userEmail,
    };

    let serviceID = 'service_fhaa9vs';
    let templateID = 'template_o0m9mja';

    emailjs.send(serviceID, templateID, emailContent);
}
