function enviarEmailCriacaoConta(userEmail, username, userPhone) {
    (function () {
        emailjs.init('V28D34g63Iod_3W8u');
    })();

    let emailContent = {
        to: userEmail,
        username: username,
        userPhone: userPhone,
        userEmail: userEmail,
    };

    let serviceID = 'service_aj1zzk3';
    let templateID = 'template_ryxvvr9';

    emailjs.send(serviceID, templateID, emailContent);
}
