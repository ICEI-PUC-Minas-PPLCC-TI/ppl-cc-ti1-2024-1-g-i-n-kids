function enviarEmailNovaPublicacao(
    userEmail,
    username,
    postId,
    postTitle,
    postAuthor
) {
    (function () {
        emailjs.init('OUSPzANe0foT3a_36');
    })();

    let emailContent = {
        to: userEmail,
        username: username,
        postId: postId,
        postTitle: postTitle,
        postAuthor: postAuthor,
    };

    let serviceID = 'service_jlia9in';
    let templateID = 'template_5k15c8b';

    emailjs
        .send(serviceID, templateID, emailContent)
        .then((res) => {
            console.log(
                'E-mail com informações da postagem enviado aos usuários.'
            );
        })
        .catch();
}
