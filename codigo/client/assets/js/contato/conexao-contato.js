const contactRouteUrl = 'https://iandn-kids-server.vercel.app/contacts/';

function createContact(contact, updateFunction) {
    fetch(contactRouteUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer gPqH84KLJz5SjcP',
        },
        body: JSON.stringify(contact),
    })
        .then((response) => response.json())
        .then((data) => {
            displayMessage(
                'Solicitação de contato enviada com sucesso.',
                'success'
            );

            if (updateFunction) {
                updateFunction();
            }
        })
        .catch((error) => {
            console.error(
                'Erro ao enviar solicitação de contato para a API:',
                error
            );
            displayMessage('Erro ao enviar solicitação de contato.', 'danger');
        });
}
