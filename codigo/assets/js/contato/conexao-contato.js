const apiUrl = 'https://83d2580e-ec7d-4bdf-935e-e970d653694e-00-33flpwk5c3pc0.picard.replit.dev/contatos';

function createContact(contact, updateFunction) {
    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(contact),
    })
        .then(response => response.json())
        .then(data => {
            displayMessage('Solicitação de contato enviada com sucesso', 'success');

            if (updateFunction) {
                updateFunction();
            }
        })
        .catch(error => {
            console.error('Erro ao enviar solicitação de contato via JSON Server:', error);
            displayMessage('Erro ao enviar solicitação de contato', 'danger');
        });
}