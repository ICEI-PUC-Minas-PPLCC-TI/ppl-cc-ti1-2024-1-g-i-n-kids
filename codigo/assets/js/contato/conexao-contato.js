const apiUrl =
    'https://8fa78851-9cf6-4898-b273-45dcca3a4f7b-00-26gxsfmuhia9y.spock.repl.co/contatos';

function createContact(contact, updateFunction) {
    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(contact),
    })
        .then((response) => response.json())
        .then((data) => {
            displayMessage(
                'Solicitação de contato enviada com sucesso',
                'success'
            );

            if (updateFunction) {
                updateFunction();
            }
        })
        .catch((error) => {
            console.error(
                'Erro ao enviar solicitação de contato via JSON Server:',
                error
            );
            displayMessage('Erro ao enviar solicitação de contato', 'danger');
        });
}
