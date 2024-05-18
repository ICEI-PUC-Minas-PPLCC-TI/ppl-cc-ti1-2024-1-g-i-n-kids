const apiUrl = 'https://8fa78851-9cf6-4898-b273-45dcca3a4f7b-00-26gxsfmuhia9y.spock.repl.co/usuarios';

function createUser(user, updateFunction) {
    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    })
        .then(response => response.json())
        .then(data => {
            displayMessage('Usuário cadastrado com sucesso', 'success');

            if (updateFunction) {
                updateFunction();
            }
        })
        .catch(error => {
            console.error('Erro ao cadastrar usuário via JSON Server:', error);
            displayMessage('Erro ao cadastrar usuário', 'danger');
        });
}

function readUsers(processData) {
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            processData(data);
        })
        .catch(error => {
            console.error('Erro ao encontrar usuário cadastrado no JSON Server:', error);
            displayMessage('Erro ao encontrar usuário cadastrado', 'danger');
        });
}

function updateUser(id, user, updateFunction) {
    fetch(`${apiUrl}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    })
        .then(response => response.json())
        .then(data => {
            displayMessage('Dados do usuário alterados com sucesso', 'success');

            if (updateFunction) {
                updateFunction();
            }
        })
        .catch(error => {
            console.error('Erro ao alterar dados do usuário via JSON Server:', error);
            displayMessage('Erro ao alterar dados do usuário', 'danger');
        });
}

function deleteUser(id, updateFunction) {
    fetch(`${apiUrl}/${id}`, {
        method: 'DELETE',
    })
        .then(response => response.json())
        .then(data => {
            displayMessage('Conta excluída com sucesso', 'success');

            if (updateFunction) {
                updateFunction();
            }
        })
        .catch(error => {
            console.error('Erro ao excluir conta via JSON Server:', error);
            displayMessage('Erro ao remover conta', 'danger');
        });
}