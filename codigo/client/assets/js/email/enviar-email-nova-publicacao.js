function enviarEmailNovaPublicacao(
    userEmail,
    username,
    postId,
    postTitle,
    postAuthor
) {
    (function () {
        emailjs.init('V28D34g63Iod_3W8u');
    })();

    let emailContent = {
        to: userEmail,
        username: username,
        postId: postId,
        postTitle: postTitle,
        postAuthor: postAuthor,
    };

    let serviceID = 'service_aj1zzk3';
    let templateID = 'template_dwl2bmj';

    emailjs.send(serviceID, templateID, emailContent);
}
